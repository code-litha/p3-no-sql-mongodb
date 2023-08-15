module.exports = {
  findAllUsers: async (req, res, next) => {
    try {
      res.status(200).json({ message: `Find All Users` });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  findOneUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `Find One User with id ${id}` });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
