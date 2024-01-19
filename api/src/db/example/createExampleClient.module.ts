import exampleClient from "./exampleClient.module.js";

/**
 * Create an example client
 * @returns {Promise<void>}
 */
const createExampleClient = async (): Promise<void> => {
  try {
    await exampleClient.save();
  } catch (error) {
    console.log("Error creating example client: ", error);
  }
}

export default createExampleClient;