import mongoose from "mongoose";
import exampleClient from "./exampleClient.module.js";

/**
 * addExampleClient
 * @description Adds an example client to the clients database
 */
async function addExampleClient() {
  const clientsDb = mongoose.connection.useDb("clients_db");
  const clientsColl = clientsDb.collection("clients");

  // Check if client exists and add testClient if not
  const testClient = exampleClient;

  await clientsColl
    .findOne({ email: testClient.email })
    .then((result) => {
      if (result) {
        console.log("Test client already exists in database");
      } else {
        console.log("Test client does not exist in database");

        // Add test client if it doesn't exist
        clientsColl.insertOne(testClient);
        console.log("Test client added to database");
      }
    });
}

export default addExampleClient;
