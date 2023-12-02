const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/" + "public"));
app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).render("notfound", { pageTitle: "404 page not found" });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
