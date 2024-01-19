import { Router } from "express";

export const indexRouteModule = Router();

indexRouteModule.get("/", (req, res) => {
  res.send("Hello, TypeScript Express!");
});