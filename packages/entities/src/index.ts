import "reflect-metadata";
import {
  ConnectionOptions,
  createConnection,
  getConnectionManager,
  ConnectionManager,
} from "typeorm";
import { Dealership, Group, Role } from "./entity";
import { getSecretByArn } from "@dealership/utils";
import { connect } from "http2";

const { DB_ROOT_USER_SECRET_ARN: secretArn } = process.env;
export { Dealership, Group, Role } from "./entity";
export { ActivationState } from "./dto";

const entities = [Dealership, Group, Role];

export const dbConnection = async () => {
  try {
    console.log("dbConnection start");
    console.log("getSecretByArn");
    const {
      password = "",
      dbname: database = "",
      engine: type = "",
      port = "",
      host = "",
      username = "",
    } = await getSecretByArn(secretArn);

    const config: ConnectionOptions = {
      type,
      database,
      username,
      password,
      port,
      host,
      synchronize: true,
      logging: true,
      entities,
      migrations: ["src/migration/**/*.ts"],
      subscribers: ["src/subscriber/**/*.ts"],
      cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
      },
    };
    console.log("creating connection");
    const connectionManager = new ConnectionManager();
    const connection = connectionManager.create(config);
    await connection.connect();
    console.log("Connection created!");
    return connection;
  } catch (e) {
    console.error(e.message || e.stack);
  }
};
