const fs = require("fs");
const path = require("path");
const productData = path.join(__dirname, "../data/product.json");

module.exports = class product {
  constructor(t) {
    this.title = t;
  }
  save() {
    let products = [];
    fs.readFile(productData, (err, fileContent) => {
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(productData, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAllProducts(cb) {
    fs.readFile(productData, (err, content) => {
      if (!err) {
        cb(JSON.parse(content)); //[{title : 'fil'},{title :'nofil'}]
      } else cb([]); //[] empty list
    });
  }
};
