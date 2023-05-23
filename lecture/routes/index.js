const router = require("express").Router();
const userRoute = require("./users");

router.get("/", (_, res) => res.send("Connect !!"));
router.use("/users", userRoute);

module.exports = router;
