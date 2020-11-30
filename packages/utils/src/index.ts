import { SecretsManager } from "aws-sdk";

const secretsManaager = new SecretsManager({ apiVersion: "2017-10-17" });

export const getSecretByArn = async (secretArn) => {
  try {
    const params = { SecretId: secretArn };
    console.log("Getting Secret");
    const { SecretString = "" } = await secretsManaager
      .getSecretValue(params)
      .promise();
    console.log("secretString: %j", { SecretString });
    const secret = JSON.parse(SecretString);
    console.log({ secret });
    return secret;
  } catch (e) {
    console.error(e.message || e.stack);
  }
};
