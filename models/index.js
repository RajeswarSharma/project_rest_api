"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize-config");

sequelize
  .authenticate()
  .then(() => console.log("Connected to Db"))
  .catch((error) => console.log(error.message));

let database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.users = require("./userModel.js")(sequelize, DataTypes);
database.sequelize
  .sync({ force: false })
  .then(() => console.log("re-sync done"));

module.exports = { database };
