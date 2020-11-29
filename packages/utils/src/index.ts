import { SecretsManager } from "aws-sdk";

const secretsManaager = new SecretsManager({ apiVersion: "2017-10-17" });

export const getSecretByArn = async (secretArn) => {
  try {
    const params = { SecretId: secretArn };
    const { SecretString = "" } = await secretsManaager
      .getSecretValue(params)
      .promise();
    const secret = JSON.parse(SecretString);
    return secret;
  } catch (e) {
    console.error(e.message || e.stack);
  }
};
