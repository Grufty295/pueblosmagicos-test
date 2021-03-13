// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Town_Ethnics = sequelize.define(
  "Town_Ethnics",
  {
    Town_Ethnics_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_Ethnics: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town_ethnics",
  }
);

module.exports = Town_Ethnics;
