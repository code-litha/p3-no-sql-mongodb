const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

class User {
  static collection() {
    const db = getDatabase();
    const usersCollection = db.collection("users");
    return usersCollection;
  }

  static async findAll() {
    const users = await this.collection().find().toArray();
    return users;
  }

  static async findOne(id) {
    const user = await this.collection().findOne({ _id: new ObjectId(id) });
    return user;
  }
}

module.exports = User;
