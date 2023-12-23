const db = require('../util/database');


module.exports = class product {
  constructor(id, t, p, d) {
    this.id = id;
    this.title = t;
    this.price = p;
    this.description = d;
  }
  save() {
    return db.execute(
      'INSERT INTO products (title, price, description) VALUES (?, ?, ?)',
      [this.title, this.price, this.description]);
  }
  static fetchAllProducts() {
    return db.execute('SELECT * FROM products');
  }

  static fetchById(id) {
    return db.execute(
      'SELECT * FROM products WHERE products.id = ?'
      , [id]);
  }
  static deleteById(id) {
    return db.execute(
      'DELETE FROM products WHERE products.id = ?'
      , [id]);
  }
  static editProduct(id, title, price, description) {
    return db.execute(
      'UPDATE products SET title = ?, price = ?, description = ? WHERE products.id = ?'
      , [title, price, description, id]);
  }

};
