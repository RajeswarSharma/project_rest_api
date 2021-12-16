"use strict";
const userController = require("../controller/user-controller");
const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const uploadImage = require("../config/multer");
const validationRules = require("../middleware/reg-form-val");

router.get("", (req, res) => {
  if (!req.user) res.render("signup");
  else res.json({ message: "You need to logout first" });
});

router.post(
  "",
  uploadImage.single("user_image"),
  validationRules,
  async (req, res) => {
    if (!req.user) {
      const validationErrors = validationResult(req);
      if (!validationErrors.isEmpty()) {
        res.json(validationErrors);
      } else {
        userController.addUser(req, res);
      }
    } else {
      res.json({ message: "You need to logout first" });
    }
  }
);
module.exports = router;
