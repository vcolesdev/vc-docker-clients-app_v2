import { Express } from "express";

/**
 * Express settings.
 * @description Sets the settings for the Express app.
 */
const getSettings = (app: Express): void => {
  app.set("trust proxy", true);
}

export default getSettings;

