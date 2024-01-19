import cors from "cors";
import express, { Express } from "express";

const getMiddleware = (app: Express): void => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

export default getMiddleware;