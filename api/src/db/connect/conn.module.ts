import mongoose from "mongoose";

/**
 * Connect to the database
 * @param connString
 */
async function conn (connString: string): Promise<any> {
  let _conn;
  _conn = await mongoose.connect(connString);
  return _conn;
}

export default conn;