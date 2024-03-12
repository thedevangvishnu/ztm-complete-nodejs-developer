const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const User = require("../model/user-model");

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({
        googleId: profile.id,
      });

      if (!user) {
        user = new User({
          name: profile.displayName,
          googleId: profile.id,
        });

        await user.save();
        console.log("New user created", user);
      }

      console.log("Existing user:", user);
    }
  )
);
