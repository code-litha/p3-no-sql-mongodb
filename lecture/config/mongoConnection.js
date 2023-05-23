const { MongoClient, ObjectId } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "db_movie";
let db;
async function mongoConnect() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    db = client.db(dbName);

    return "connect";
  } catch (error) {
    await client.close();
    throw error;
  }
}

const getDatabase = () => db;

module.exports = {
  mongoConnect,
  db, // langsung dapat undefined
  getDatabase,
};
