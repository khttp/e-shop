const fs = require("fs");
const path = require("path");
const productData = path.join(__dirname, "../data/product.json");

const products = [];

const readDataFromFile = (cb) => {
  fs.readFile(productData, (err, content) => {
    if (!err) {
      cb(JSON.parse(content)); //[{title : 'fil'},{title :'nofil'}]
    } else cb([]); //[] empty list
  });
};
const writeDataToFile = (prods) => {
  fs.writeFile(productData, JSON.stringify(prods), (err) => {
  });
};

module.exports = class product {
  constructor(t) {
    this.title = t;
  }
  save() {
    readDataFromFile((products) => {
      products.push(this);
      writeDataToFile(products);
    });
  }

  static fetchAllProducts(cb) {
    readDataFromFile(cb);
  }

  static fetchById(id, cb) {
    readDataFromFile((products) => {
      const product = products.find((p) => p.title === id);
      cb(product);
    });
  }
};
