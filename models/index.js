const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const User = require("./User");
const User_Email = require("./User_Email");
const Town = require("./Town");
const Town_Attraction = require("./Town_Attraction");
const Town_Dishes = require("./Town_Dishes");
const Town_Ethnics = require("./Town_Ethnics");
const Town_Festivities = require("./Town_Festivities");
const Town_Photos = require("./Town_Photos");
const Review = require("./Review");
const Admin = require("./Admin");
const Admin_Email = require("./Admin_Email");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("'It's alive!!!!");
  })
  .catch((err) => {
    console.log("No se conecto :(");
  });

User.hasMany(User_Email, { as: "emails" });
User.hasMany(Review, { as: "reviews" });

User_Email.belongsTo(User, { foreignKey: "User_ID" });

Town.hasMany(Town_Attraction, { as: "attractions" });
Town.hasMany(Town_Dishes, { as: "dishes" });
Town.hasMany(Town_Ethnics, { as: "ethnics" });
Town.hasMany(Town_Festivities, { as: "festivities" });
Town.hasMany(Town_Photos, { as: "photos" });
Town.hasMany(Review, { as: "reviews" });

Town_Attraction.belongsTo(Town, { foreignKey: "Town_ID" });
Town_Dishes.belongsTo(Town, { foreignKey: "Town_ID" });
Town_Ethnics.belongsTo(Town, { foreignKey: "Town_ID" });
Town_Festivities.belongsTo(Town, { foreignKey: "Town_ID" });
Town_Photos.belongsTo(Town, { foreignKey: "Town_ID" });

Review.belongsTo(User, { foreignKey: "User_ID" });
Review.belongsTo(Town, { foreignKey: "Town_ID" });

Admin.hasMany(Admin_Email, { as: "emails" });
Admin_Email.belongsTo(Admin, { foreignKey: "Admin_ID" });
