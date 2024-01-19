import { Router } from "express";
import mongoose from "mongoose";

/**
 * clientsRoute
 * @description Clients route
 */

export const clientsRouteModule = Router();

clientsRouteModule.get("/clients/", (req, res) => {
  const clientsDb = mongoose.connection.useDb("clients_db");
  const clientsColl = clientsDb.collection("clients");

  // Check against clients collection
  if (!clientsColl) {
    res.status(500).send("Error connecting to clients database");
  }

  // Send a simple message json response
  // res.status(200).json({message:"Hello world!"});

  // Send a json response with the clients collection
  clientsColl.find({}).toArray()
    .then((result) => {
      res.status(200).json(result);
    }).catch((error) => {
      console.log("Error getting clients collection: ", error);
  });
});

