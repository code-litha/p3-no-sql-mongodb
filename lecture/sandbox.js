const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function mongoConnection() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const database = client.db("db_bsd_04");
    const userCollection = database.collection("users");

    const users = await userCollection.find().toArray();

    return users;
    // const user = await userCollection.findOne();

    // return user;
  } catch (error) {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

mongoConnection().then((data) => {
  console.log(data);
});
