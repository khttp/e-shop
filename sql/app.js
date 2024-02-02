const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const errControllers = require("./controllers/err");
const app = express();
const sequelize = require("./util/database");
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/" + "public"));
app.use(shopRoutes);
app.use(adminRoutes);
app.use(errControllers.errPage);

sequelize.sync().then(result => {
  app.listen(3000, () => {
    console.log("app is running on port 3000");
  });
}).catch(err => {
  console.log(err)
});
