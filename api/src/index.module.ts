import express, { Express } from "express";
import addExampleClient from "./db/example/addExampleClient.module.js";
import { getSettings, getMiddleware, getClientsAppRoutes } from "./config/index.module.js";
import { startHttpServer, startHttpsServer } from "./server.module.js";
import { PORT, SSL_PORT } from "./config/constants.module.js";
import { main } from "./db/main.module.js";

// Create the express app
const app: Express = express();

// Get the settings, middleware, and routes
getSettings(app);
getMiddleware(app);
getClientsAppRoutes(app);

// Start the servers
startHttpServer(app, PORT);
startHttpsServer(app, SSL_PORT);

/* ------------- START DATABASE FUNCTIONS -------------- */

await main()
  .then(() => {
    // Do things here...

    // Add example client
    addExampleClient().catch((error) => {
      console.log("Error adding example client: ", error);
    });

  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });

/* -------------- END DATABASE FUNCTIONS --------------- */

// Default app export
export default app;