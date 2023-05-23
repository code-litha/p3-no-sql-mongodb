const User = require("../model/User");

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
      const user = await User.findOne(id);
      res.status(200).json({ message: `Find One User with id ${id}`, user });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
