// Admin.js
/* Clase que representa un Administrador */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Admin_Email = sequelize.define(
  "Admin_Email",
  {
    Admin_Email_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Admin_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Admin_Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "admin_email",
  }
);

module.exports = Admin_Email;
