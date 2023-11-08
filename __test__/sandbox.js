const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "test_db";

async function mongoConnect() {
  try {
    // connect to mongodb server
    await client.connect();
    console.log("Connected successfully to server");

    //db instance
    const db = client.db(dbName);
    // console.log(db);

    const usersCollection = db.collection("users");

    // Find
    const users = await usersCollection
      .find({}, { projection: { _id: 0, email: 1 } }) // projection, field yang mau ditampilkan, 0 => tidak tampil, secara default _id: pasti tampil
      .toArray();

    return users;

    // Find One
    // const user = await usersCollection.findOne({
    //   _id: new ObjectId("63f5c9bb5b9577f454a5c695"),
    // });
    // return user;

    // Insert One
    // const user = await usersCollection.insertOne({
    //   name: "Putri",
    //   email: "putri@mail.com",
    // });
    // return user;
  } catch (error) {
    // console.log(error);
    client.close();
    throw error;
  }
}

mongoConnect()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
