import Client from "../models/ClientModel.module.js";

const exampleClient = new Client({
  firstName: "John",
  lastName: "Doe",
  phone: "555-555-5555",
  email: "jdoe2023@examplemail.com",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  comments: "This is an example client",
});

export default exampleClient;