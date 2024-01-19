import fs from "fs";
import https from "https";
import http from "http";
import { Express } from "express";
import { CERT_PATH } from "./config/constants.module.js";

/**
 * getServerOptions
 * @description Returns the server options
 */
const getServerOptions = (): object => {
  return {
    key: fs.readFileSync(`${CERT_PATH}express.key`),
    cert: fs.readFileSync(`${CERT_PATH}express.crt`),
  }
}

/**
 * startHttpsServer
 * @param app
 * @param port
 * @description Starts the secureHTTPS server
 */
const startHttpsServer = (app: Express, port: number): void => {
  https.createServer(getServerOptions(), app).listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`);
  });
}

/**
 * startHttpServer
 * @param app
 * @param port
 * @description Starts the HTTP server
 */
const startHttpServer = (app: Express, port: number): void => {
  http.createServer(app).listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
  });
}

export {
  getServerOptions,
  startHttpsServer,
  startHttpServer
};