const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { Problem } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다");
  fs.mkdirSync("uploads");
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      //제로초.png;
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + new Date().getTime() + ext); // 제로초1231412.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});
router.post("/addProblem", isLoggedIn, async (req, res, next) => {
  console.log("hi");
  try {
    console.log(req.body);
    const problem = await Problem.create({
      ProblemId: req.body.ProblemId,
      Image: req.body.Image,
      Name1: req.body.Name1,
      Name2: req.body.Name2,
      Name3: req.body.Name3,
      Name4: req.body.Name4,
      UserId: req.user.id,
    });
    res.status(201).json(problem);
  } catch (error) {
    console.log(error);
    console.error(error);
    next(error);
  }
});
router.put("/updateProblem", isLoggedIn, async (req, res, next) => {
  try {
    await Problem.update(
      {
        Image: req.body.Image,
        Name1: req.body.Name1,
        Name2: req.body.Name2,
        Name3: req.body.Name3,
        Name4: req.body.Name4,
      },
      {
        where: {
          ProblemId: req.body.ProblemId,
          UserId: req.user.id,
        },
      }
    );
    res.status(200).json({
      ProblemId: req.body.ProblemId,
      Image: req.body.Image,
      Name1: req.body.Name1,
      Name2: req.body.Name2,
      Name3: req.body.Name3,
      Name4: req.body.Name4,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    next(error);
  }
});
router.get("/getProblem", isLoggedIn, async (req, res, next) => {
  try {
    const problems = await Problem.findAll({
      where: { UserId: req.user.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "UserId", "id"],
      },
    });

    res.status(201).json(problems);
  } catch (error) {
    console.log(error);
    console.error(error);
    next(error);
  }
});

router.post("/image", isLoggedIn, upload.single("image"), (req, res, next) => {
  // POST /problem/image
  console.log(req.file);
  res.json(req.file.filename);
});

router.post("/deleteProblem", isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.body);
    await Problem.destroy({
      where: { UserId: req.user.id, ProblemId: req.body.ProblemId },
    });
    res.status(200);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
