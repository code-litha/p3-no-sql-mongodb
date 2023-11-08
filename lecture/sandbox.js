const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("db_bsd_07");
    const usersCollection = database.collection("users");

    // const users = await usersCollection.find().toArray();

    // console.log(users);
    const user = await usersCollection.findOne({
      // _id: "654b2b7c51de02030fa9be68",
      _id: new ObjectId("654b2b7c51de02030fa9be68"),
    });

    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
