const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");
const User = require("../model/user");

module.exports = {
  findAllUsers: async (req, res, next) => {
    try {
      const users = await User.findAll();

      res.status(200).json({ message: `Find All Users`, users });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  findOneUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      res.status(200).json({ message: `Find One User with id ${id}`, user });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { name, gender } = req.body;
      const user = await User.create({ name, gender });

      res.status(201).json({ message: `Successfully create new user`, user });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
