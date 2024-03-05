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
      const basename = path.basename(file.originalname, ext); // 제로초 파일명 추출
      done(null, basename + new Date().getTime() + ext); // 제로초1231412.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 주기적으로 사진을 지워주는 코드
// 문제를 생성할때 데이터베이스에 올리기 전에 사진을 먼저 올리기때문에 그사이에 코드가 실행되면 문제가 발생할 수있다
// 정리 전에 서버를 닫고 하는 등 다른 조치가 필요해 보인다
async function cleanup() {
  try {
    const folderPath = "./uploads";
    const database_Image = [];
    const problems = await Problem.findAll({
      attributes: ["Image"],
    });
    problems.forEach((problem) => {
      console.log(`Image: ${problem.Image}`);
      database_Image.push(problem.Image);
    });
    console.log(database_Image);
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error("Error reading folder:", err);
        return;
      }

      // 파일 목록을 순회하며 각 파일을 삭제
      files.forEach((file) => {
        if (!database_Image.includes(file)) {
          const filePath = path.join(folderPath, file);
          console.log("파일 경로", filePath);

          // 파일 삭제
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log(`File ${file} deleted successfully`);
            }
          });
        }
      });
    });
  } catch (err) {
    console.error("Cleanup error:", err);
  }
}
// setInterval(cleanup, 1000);

router.post("/addProblem", isLoggedIn, async (req, res, next) => {
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
