// import { Sequelize } from "sequelize";
// import seq from "../config/sequelize.config.js";
const Sequelize = require("sequelize");
const seq = require("../config/sequelize.config.js");

const { DataTypes } = Sequelize;

const User = seq.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
