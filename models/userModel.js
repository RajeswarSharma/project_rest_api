"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    user_password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    total_orders: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    last_login: {
      type: DataTypes.DATE,
    },
    img_public_id: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
