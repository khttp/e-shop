const express = require("express");
const { urlencoded, json } = require("body-parser");
require("dotenv/config");
const morgan = require('morgan');
//const mongoconnect = require("./util/database");
const mongoose = require("mongoose");
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('tiny'));


//routes
const adminRoutes = require("./routes/product");

app.use(adminRoutes);


//connect to database
mongoose.connect(
  process.env.DB_CONNECTION
  , { dbName: 'eshop' }
)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

