import { dbConnection, Group } from "@dealership/entities";

let connection;

export const handler = async (event: any = {}): Promise<any> => {
  try {
    console.log("AddGroup Invoked: %j", { event });
    const id = `${Date.now()}`;
    const {
      arguments: {
        input: {
          name = "",
          street = "",
          city = "",
          state = "",
          country = "",
          zip = "",
          url = "",
          phone = "",
          activation = "enabled",
          admins = [],
        } = {},
      } = {},
    } = event;
    if (!connection) {
      connection = await dbConnection();
      console.log("Connected!");
    }
    const groupRepository = connection.getRepository(Group);
    const group = new Group();
    group.name = name;
    group.street = street;
    group.city = city;
    group.state = state;
    group.country = country;
    group.zip = zip;
    group.url = url;
    group.phone = phone;
    group.activation = activation;
    group.admins = admins;

    const insertResult = await groupRepository.save(group);
    console.log({ insertResult, group });
    return {
      id,
      name,
      street,
      city,
      state,
      country,
      zip,
      url,
      phone,
      admins,
    };
  } catch (e) {
    console.error(e.message);
    console.error(e.stack);
    throw e;
  }
};
