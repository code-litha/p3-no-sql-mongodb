const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "test_db";

let abc = 1;
let db;
async function mongoConnect() {
  try {
    // connect to mongodb server
    await client.connect();
    console.log("Connected successfully to mongo");

    //db instance
    db = client.db(dbName);
    // console.log(db, "<<< db dalam mongo connect");

    // bagaimana caranya supaya di controller bisa akses db.collection('...')
    // jika kita ingin menggunakan suatu variable dari suatu file, dan diakses di file lain, maka perlu diapakan?
    // const usersCollection = db.collection("users");

    // // Find
    // const users = await usersCollection
    //   .find({}, { projection: { _id: 0, email: 1 } }) // projection, field yang mau ditampilkan, 0 => tidak tampil, secara default _id: pasti tampil
    //   .toArray();

    // return users;
  } catch (error) {
    // console.log(error);
    client.close();
    throw error;
  }
}

const getDatabase = () => db;

module.exports = {
  abc,
  db,
  mongoConnect,
  getDatabase,
};
