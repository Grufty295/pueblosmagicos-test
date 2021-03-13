// User.js
/* Clase que representa un Usuario */
const { Sequelize, DataTypes } = require("sequelize");
const User_Email = require("./User_Email");
const sequelize = new Sequelize("mysql::memory:");

const User = sequelize.define(
  "User",
  {
    User_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    User_Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    User_Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    User_Gender: {
      type: DataTypes.ENUM,
      values: ["M", "F", "X"],
    },
    User_State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    User_Bio: {
      type: DataTypes.STRING,
    },
    User_Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    User_Photo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "user",
  }
);

module.exports = User;
