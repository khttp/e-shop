const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user');

userRouter
  .post('/register', userController.register)
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUserById)
  .post('/login', userController.login)
  // .put('/update-user/:id', userController.updateUser)
  .delete('/delete-user/:id', userController.deleteUser)


module.exports = userRouter;
