// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const Town = require("./Town");
const sequelize = new Sequelize("mysql::memory:");

const Town_Attraction = sequelize.define(
  "Town_Attraction",
  {
    Town_Attraction_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_Attraction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town_attractions",
  }
);

module.exports = Town_Attraction;
