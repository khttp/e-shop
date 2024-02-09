const express = require('express');
const userRouter = express.Router();

subRouter
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUserById)
  .post('/regester', userController.registe)
  .post('/login', userController.login)
  .put('/update-user/:id', userController.updateUser)
  .delete('/delete-user/:id', userController.deleteUser)



