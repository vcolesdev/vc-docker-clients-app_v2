import { Connection, Schema } from "mongoose";

/**
 * Create a new client
 * @param db
 * @param client
 * @param cb
 */
async function createClient (db: Connection, client: Schema, cb: () => void): Promise<any> {
  let _client = await db.collection("clients").insertOne(client);
  console.log("Created client: ", _client);

  if (cb) cb();

  return _client;
}

export default createClient;