import { Connection, Schema } from "mongoose";
import { Db } from "mongodb";

interface UpdateOneParams {
  filter: any;
  update: any;
  options?: any;
}

async function updateClient (db: Connection, client: Schema, params: UpdateOneParams, cb: () => void): Promise<any> {
  // ...
}