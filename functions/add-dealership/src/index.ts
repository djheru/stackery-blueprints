import {
  dbConnection,
  ActivationState,
  Dealership,
} from "@dealership/entities";

let connection;

export const handler = async (event: any = {}): Promise<any> => {
  try {
    console.log("AddDealership Invoked: %j", { event });
    const id = `${Date.now()}`;
    const {
      arguments: {
        input: {
          currentDealership = "",
          groupId = "",
          name = "",
          street = "",
          city = "",
          state = "",
          country = "",
          zip = "",
          url = "",
          phone = "",
          brand = "",
          slug = "",
          activation = "enabled",
        } = {},
      } = {},
    } = event;
    if (!connection) {
      connection = await dbConnection();
    }
    const dealershipRepository = connection.getRepository(Dealership);
    const dealership = new Dealership();
    dealership.currentDealership = currentDealership;
    dealership.name = name;
    dealership.street = street;
    dealership.city = city;
    dealership.state = state;
    dealership.country = country;
    dealership.zip = zip;
    dealership.url = url;
    dealership.phone = phone;
    dealership.brand = brand;
    dealership.slug = slug;
    dealership.activation = activation;

    const insertResult = await dealershipRepository.save(dealership);
    console.log(insertResult);

    return {
      id,
      currentDealership,
      groupId,
      name,
      street,
      city,
      state,
      country,
      zip,
      url,
      phone,
      brand,
      slug,
      activation,
    };
  } catch (e) {
    console.error(e.message);
    console.error(e.stack);
    throw e;
  }
};
