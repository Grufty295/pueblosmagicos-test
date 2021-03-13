// Town.js
/* Clase que representa un Pueblo Mágico */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Town = sequelize.define(
  "Town",
  {
    Town_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Town_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Town_Biome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Town_Weather: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Town_Incorporation_Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "town",
  }
);

module.exports = Town;
