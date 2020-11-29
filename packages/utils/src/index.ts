export const addDealershipHandler = async (event: any = {}): Promise<any> => {
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
        activation = "",
      } = {},
    } = {},
  } = event;
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
};
export const addGroupHandler = async (event: any = {}): Promise<any> => {
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
        activation = "",
      } = {},
    } = {},
  } = event;
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
    activation,
  };
};
