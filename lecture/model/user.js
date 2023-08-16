const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongoConnection");

class User {
  static userCollection() {
    return getDB().collection("users");
  }

  static async findAll() {
    const users = await this.userCollection().find().toArray();

    return users;
  }

  static async findOne(id) {
    const user = await this.userCollection().findOne({
      _id: new ObjectId(id),
    });

    return user;
  }

  static async insertOne(payload) {
    const user = await this.userCollection().insertOne(payload);

    const newUser = await this.userCollection().findOne({
      _id: new ObjectId(user.insertedId),
    });
    return newUser;
  }
}

module.exports = User;
