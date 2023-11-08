const { ObjectId } = require("mongodb");
const {
  abc,
  db,
  mongoConnect,
  getDatabase,
} = require("../config/mongoConnection");
const User = require("../model/User");

module.exports = {
  findAllUsers: async (req, res, next) => {
    try {
      // await mongoConnect();
      // console.log(abc);
      // console.log(db, "<<< db");
      // console.log(getDatabase(), "<<< get database");
      // const db = getDatabase();

      // const users = await db.collection("users").find().toArray();
      const users = await User.findAll();
      res.status(200).json({ message: `Find All Users`, data: users });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  findOneUser: async (req, res, next) => {
    try {
      const { id } = req.params;

      // await mongoConnect(); // sampai semuanya clear dulu, baru dipindahin ke app connectnya

      // const db = getDatabase();
      // const user = await db
      //   .collection("users")
      //   .findOne({ _id: new ObjectId(id) });

      const user = await User.findOne(id);
      res
        .status(200)
        .json({ message: `Find One User with id ${id}`, data: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
