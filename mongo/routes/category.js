const categoryController = require('../controllers/category');
const express = require('express');
const router = express.Router();


router
  .get('/', categoryController.getAllCategories)
  .get('/:id', categoryController.getCategoryById)
  .post('/add-category', categoryController.addCategory)
  .put('/update-category/:id', categoryController.updateCategory)
  .delete('/delete-category/:id', categoryController.deleteCategory)

module.exports = router;
