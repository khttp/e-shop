const { userModel } = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    req.body.passwordHash = bcrypt.hashSync(req.body.password, 10);
    const createdUser = await userModel.create(req.body);
    if (!createdUser) {
      res.status(400).json({ message: "User not created" });
    }
    res.status(201).json(createdUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).select("-passwordHash");
    if (users.length < 1) {
      res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}
exports.getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select("-passwordHash");
    if (!user) {
      res.status(404).json({ message: "User not found" });

    }
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(deletedUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

exports.login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: { $eq: req.body.email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.passwordHash);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json({ email: user.email, token });
      });

  } catch (e) {
    return res.status(400).json({ message: e.message });
  }

}

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id);
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    !req.body.password ? req.body.password = updatedUser.passwordHash : req.body.password = bcrypt.hashSync(req.body.password, 10);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

