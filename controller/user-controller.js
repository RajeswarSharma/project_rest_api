"use strict";
const { database } = require("../models");
const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudinary");
const { v4: uuidv4 } = require("uuid");
const { DataTypes, Sequelize } = require("sequelize");
const res = require("express/lib/response");
const User = database.users;
// CREATE USER

const addUser = async (req, res, imgUrl) => {
  const salt = await bcrypt.genSalt(10);
  req.body.user_password = await bcrypt.hash(req.body.user_password, salt);
  const data = {
    user_id: uuidv4(),
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_image: "#",
    total_orders:req.body.total_orders
  };
  try {
    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "profiles",
        use_filename: true,
      }
    );
    data.user_image = secure_url;
    data.img_public_id = public_id;
    const user = await User.create(data);
    res.redirect(`details?user_id=${user.user_id}`);
  } catch (error) {
    res.send("cant add user");
    console.log(error);
  } finally {
    return;
  }
};
// GET ALL USERS
const getAllUsers = async (res) => {
  try {
    const users = await User.findAll({
      attributes: ["user_id", "user_name", "user_email", "total_orders"],
    });
    res.status(200).render("home", { users });
    //res.json(users);
  } catch (error) {
    res.send("cant find users");
    console.log(error);
  } finally {
    return;
  }
};
// GET BY ID
const getById = async (req, res, editFlag) => {
  const user_id = req.query.user_id;
  try {
    let user = await User.findOne({
      where: { user_id },
      attributes: [
        "user_name",
        "user_email",
        "user_image",
        "created_at",
        "last_login",
        "total_orders",
        "user_id",
        "img_public_id",
      ],
    });
    user = user.dataValues;
    user.last_login = user.last_login ? user.last_login : "Never";
    res.status(200).render("details", { user, editFlag });
    //res.status(200).send(user);
  } catch (error) {
    res.send("Invalid User ID");
  } finally {
    return;
  }
};
// FIND BY EMAIL
const getByEmail = async (user_email) => {
  try {
    let user = await User.findOne({
      where: { user_email },
      attributes: ["user_email", "user_id", "user_password"],
    });
    user = user.dataValues;
    return user;
  } catch (error) {
    return null;
  }
};
const authById = async (user_id) => {
  try {
    let user = await User.findOne({
      where: { user_id },
      attributes: [
        "user_id",
        "user_name",
        "user_email",
        "user_image",
        "created_at",
        "last_login",
        "total_orders",
        "img_public_id"
      ],
    });
    return user.dataValues;
  } catch (error) {
    return null;
  }
};

const updateLogin = async (user_id) => {
  try {
    let user = await User.update(
      { last_login: Date.now() },
      { where: { user_id } }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const updateUser = async (user, filepath) => {
  const oldUser = await authById(user.user_id);
  delete user["user_id"];
  try {
    if (user.user_password) {
      const salt = await bcrypt.genSalt(10);
      user.user_password = await bcrypt.hash(user.user_password, salt);
    }
    if (filepath) {
      await cloudinary.uploader.destroy(oldUser.img_public_id);
      const { secure_url, public_id } = await cloudinary.uploader.upload(
        filepath,
        {
          folder: "profiles",
          use_filename: true,
        }
      );
      user.user_image = secure_url;
      user.img_public_id = public_id;
    }
    await User.update(user, { where: { user_id: oldUser.user_id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deleteUser = async(user_id)=>{
  try {
    await User.destroy({ where: { user_id } });
    return true;  
  } catch (error) {
    return false;
  } 
}
module.exports = {
  addUser,
  getAllUsers,
  getById,
  getByEmail,
  authById,
  updateLogin,
  updateUser,
  deleteUser
};
