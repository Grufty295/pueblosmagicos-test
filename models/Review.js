// Review.js
/* Clase que representa una Reseña */
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Review = sequelize.define(
  "Review",
  {
    Review_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Town_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Review_Rate: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
      allowNull: false,
    },
    Review_Advising: {
      type: DataTypes.STRING,
    },
    Review_Safety_Rate: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
    },
  },
  {
    tableName: "review",
    timestamps: true,
    createdAt: "Review_Creation_Date",
  }
);

module.exports = Review;
