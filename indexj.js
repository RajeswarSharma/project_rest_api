"use strict";
require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const passport = require("passport");
const insert = require("./routes/insert");
const home = require("./routes/home");
const login = require("./routes/login");
const update = require("./routes/update");
const { deleteUser, authById } = require("./controller/user-controller");
const cloudinary = require("./config/cloudinary");
require("./config/passport");

const app = express();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Server start failed");
  }
});
app.use(
  require("express-session")({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use("", home);
app.use("/insert", insert);
app.use("/login", login);
app.use("/update", update);

app.get("/logout", (req, res) => {
  req.logout();
  res.session = null;
  res.redirect("/");
});

app.delete("/delete", async (req, res) => {
  console.log("done");
  console.log(req.query.user_id);
  if (req.user) {
    if (req.user.user_id === req.query.user_id) {
      let status = await deleteUser(req.user.user_id);
      if (status) {
        await cloudinary.uploader.destroy(req.user.img_public_id);
        req.logout();
        res.session = null;
        res.status(200).send("Done");
      }
    } else {
      res.status(401).send("invalid request");
    }
  } else {
    res.send(401).send("Invalid request");
  }
});
app.get("/image", async (req, res) => {
  const user = await authById(req.query.user_id);
  res.redirect(user.user_image);
});
