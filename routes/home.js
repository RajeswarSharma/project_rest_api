"use strict";
const express = require("express");
const { getAllUsers, getById } = require("../controller/user-controller");

const router = express.Router();

router.get("", async (req, res) => {
 await getAllUsers(res);
});
router.get("/details", async (req, res) => {
  if (req.user) {
    if (req.user.user_id === req.query.user_id) {
      await getById(req, res, true);
    } else {
      await getById(req, res, false);
    }
  } else {
    await getById(req, res, false);
  }
});
module.exports = router;
