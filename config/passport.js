"use strict";
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { authById, getByEmail, updateLogin } = require("../controller/user-controller");
passport.use(
  new LocalStrategy(
    {
      usernameField: "user_email",
      passwordField: "user_password",
      session: true,
    },
    async (email, password, done) => {
      const user = await getByEmail(email);
      if (user) {
        const isVerified = await bcrypt.compare(password, user.user_password);
        if (isVerified) {
          const t = await updateLogin(user.user_id);
          done(null, user.user_id);
        } else {
          done(null, false, {
            success: false,
            message: "Invalid Login credentials",
          });
        }
      } else {
        return done(null, false, {
          success: false,
          message: "No user exists",
        });
      }
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  const user = await authById(id);
  if (user) {
    done(null, user);
  }
});
