// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Town_Festivities = sequelize.define(
  "Town_Festivities",
  {
    Town_Festivities_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_Festivities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town_festivities",
  }
);

module.exports = Town_Festivities;
