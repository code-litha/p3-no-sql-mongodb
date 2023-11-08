const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

class User {
  static collection() {
    const database = getDatabase();
    const usersCollection = database.collection("users");

    return usersCollection;
  }

  static async findAll() {
    const users = await this.collection().find().toArray();
    return users;
  }

  static async findById(id) {
    const user = await this.collection().findOne({
      _id: new ObjectId(id),
    });

    return user;
  }

  static async create(payload) {
    const user = await this.collection().insertOne(payload);

    return user;
  }
}

module.exports = User;
