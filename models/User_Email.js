// User_Email.js
/* Clase que representa un Email del Usuario */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const User_Email = sequelize.define(
  "User_Email",
  {
    User_Email_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    User_Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user_email",
  }
);

module.exports = User_Email;
