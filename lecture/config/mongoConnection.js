const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
let db;

async function mongoConnection() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db("db_bsd_04");

    return db;
  } catch (error) {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// GETTER => mereturn data yang terbaru
function getDB() {
  return db;
}

module.exports = {
  mongoConnection,
  db,
  getDB,
};
