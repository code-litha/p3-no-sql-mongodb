const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const routes = require("./routes");

const { mongoConnection } = require("./config/mongoConnection");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

mongoConnection().then((db) => {
  // console.log(db);
  app.listen(port, () => console.log(`Apps is listening at port ${port}`));
});
