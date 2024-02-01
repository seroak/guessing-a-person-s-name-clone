const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("시리얼라이즈", user.id);
    done(null, user.id); // 여기의 user._id가 req.session.passport.user에 저장
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      console.log("디시리얼라이즈 실행");
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};
