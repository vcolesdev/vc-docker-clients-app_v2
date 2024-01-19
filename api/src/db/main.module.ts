import conn from "./connect/conn.module.js";
import { connString } from "./connect/connString.module.js";
import { Db } from "mongodb";

/**
 * main db instance
 * @description Connects to the database
 * @returns {Promise<Db>} The database connection (instance)
 */
async function main(): Promise<Db> {
  let _db: Db;
  _db = await conn(connString);
  return _db;
}

export { main };