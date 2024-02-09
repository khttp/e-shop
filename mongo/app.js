// require modules 

const express = require("express");
const { urlencoded, json } = require("body-parser");
require("dotenv/config");
const morgan = require('morgan');
const mongoose = require("mongoose");
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('tiny'));


//routes
const adminRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");

app.use('/products', adminRoutes);
app.use('/categories', categoryRoutes);
//app.use('/users', userRoutes);


//connect to database
mongoose.connect(
  process.env.DBCONN
  , { dbName: 'eshop' }
)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

