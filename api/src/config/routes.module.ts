import { Express } from "express";
import { routes } from "../routes/index.module.js";

/**
 * getClientsAppRoutes
 * @param app
 * @description Sets the client app routes
 */
const getClientsAppRoutes = (app: Express) => app.use("/", routes);

export { getClientsAppRoutes };