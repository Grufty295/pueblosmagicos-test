// Admin.js
/* Clase que representa un Administrador */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Admin = sequelize.define(
  "Admin",
  {
    Admin_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Admin_Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Admin_Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "admin",
  }
);
module.exports = Admin;
