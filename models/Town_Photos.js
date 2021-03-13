// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Town_Photos = sequelize.define(
  "Town_Photos",
  {
    Town_Photos_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_Photos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town_photos",
  }
);

module.exports = Town_Photos;
