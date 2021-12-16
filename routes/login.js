"use strict";
const express = require("express");
const passport = require("passport");

const router = express.Router();
router.get("/", (req, res) => {
    if(req.user){
        console.log(req.baseUrl);
        res.redirect(`/details?user_id=${req.user.user_id}`);
        return;    
    }
    res.render("login");
    return; 
});

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        isactive: false,
        message: info.message,
        username: null,
      });
    }
    req.login(user, (error) => {
      if (error) {
        res.status(406).json({ success: false });
      } else {
        res.redirect("/");
      }
    });
  })(req, res, next);
});

module.exports = router;
