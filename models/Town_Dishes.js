// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Town_Dishes = sequelize.define(
  "Town_Dishes",
  {
    Town_Dishes_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_Dishes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town_dishes",
  }
);

module.exports = Town_Dishes;
