const { MongoClient, ObjectId } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "db_movie";

async function mongoConnect() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const usersCollection = db.collection("users");

    // const users = await usersCollection.find().toArray();

    // return users;
    const user = await usersCollection.findOne({
      // _id: "64194fe292e62ea1e2dce2f1"         // ini tidak bisa
      _id: new ObjectId("64194fe292e62ea1e2dce2f1"),
    });
    return user;

    // console.log(user);

    // const newUser = await usersCollection.insertOne({ name: "Jendy", age: 28 });
    // return newUser;
    // the following code examples can be pasted here...
  } catch (error) {
    await client.close();
    throw error;
  }
}

mongoConnect()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
