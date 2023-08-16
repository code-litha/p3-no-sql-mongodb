const router = require("express").Router();
const Controller = require("../controllers/users");

router.get("/", Controller.findAllUsers);
router.get("/:id", Controller.findOneUser);
router.post("/", Controller.createUser);

module.exports = router;
