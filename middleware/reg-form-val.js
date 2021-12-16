"use strict";
const { check } = require("express-validator");
module.exports = [
  check("user_name")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .matches(/^[a-zA-Z*$]/)
    .withMessage("Only characters with white space are allowed"),
  check("user_email")
    .trim()
    .notEmpty()
    .withMessage("Email id is required")
    .isEmail()
    .withMessage("Invalid Email Id"),
  check("user_password").trim().notEmpty().withMessage("Password required"),
];
