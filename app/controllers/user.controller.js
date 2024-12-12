// import User from "../models/user.model.js";
// import mysql from "../config/mysql.config.js";
// import md5 from "md5";
const User = require("../models/user.model.js");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id", "email"] });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: ["id", "email"] });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const newUser = await User.create({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "Email must be unique." });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await User.destroy({ where: { id } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};
