const express = require("express");
const router = express.Router();
const {
  homeGet,
  registerPost,
  userLogin,
  aboutPage,
} = require("../controller/userController.js");

router.get("/", homeGet);
router.post("/register", registerPost);
router.post("/login", userLogin);
router.get("/about", aboutPage);

module.exports = router;
