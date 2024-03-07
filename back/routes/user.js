const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/loadUser", async (req, res, next) => {
  try {
    console.log("req.user", req.user);
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      // return res를 하면 쿠키를 프론트로 보내주다
      // json(user)를 통해 유저 정보도 프론트로 보내준다
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      // req.user가 없으면 리턴을 해줘야지 trycatch는 백앤드 에러지 req.user가 없다고 에러가 아니지
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 13);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  // 전략 LocalStrategy를 실행 user 객체를 가지고 옴
  passport.authenticate("local", (err, user, info) => {
    console.log(user);
    if (err) {
      // 서버 에러
      console.error(err);
      return next(err);
    }
    if (info) {
      // 클라이언트 에러
      return res.status(401).send(info.reason);
    }
    // login이 serializeUser를 실행
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      // return res를 하면 쿠키를 프론트로 보내주다
      // json(user)를 통해 유저 정보도 프론트로 보내준다
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.send("ok");
  });
});
module.exports = router;
