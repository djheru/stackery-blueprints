import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Dealership, Group, Role } from "./src/entity";
import { getSecretByArn } from "@dealership/utils";

const { DB_ROOT_USER_SECRET_ARN: secretArn } = process.env;
export { Dealership, Group, Role } from "./src/entity";
export { ActivationState } from "./src/dto";

const entities = [Dealership, Group, Role];

export const dbConnection = async () => {
  try {
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
      logging: false,
      entities,
      migrations: ["src/migration/**/*.ts"],
      subscribers: ["src/subscriber/**/*.ts"],
      cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
      },
    };
    const conn = await createConnection({ ...config, entities });
    return conn;
  } catch (e) {
    console.error(e.message || e.stack);
  }
};
