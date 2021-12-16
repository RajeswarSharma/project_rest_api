"use strict";
const express = require("express");
const router = express.Router();
const uploadImage = require("../config/multer");
const { updateUser } = require("../controller/user-controller");

router.get("/", (req, res) => {
  if (!req.user) {
    res.redirect("login");
    return;
  }
  if (req.user.user_id === req.query.user_id) {
    res.render("update", { user: req.user });
  } else {
    res.json({ message: "invalid request" });
  }
});

router.put("/", uploadImage.single("user_image"), async (req, res) => {
  console.log(req.body);
  if (req.user && req.body.user_id === req.user.user_id) {
    let updateStatus = false;
    if (req.file) {
      console.log(req.file.path);
      updateStatus = await updateUser(req.body, req.file.path);
    } else {
      updateStatus = await updateUser(req.body, null);
    }
    if (updateStatus) res.status(200).send("updated");
    else res.status(401).send("Cannot Update");
  } else {
    res.status(401).send("Invalid request");
  }
});

module.exports = router;
