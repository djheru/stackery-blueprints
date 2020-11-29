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
