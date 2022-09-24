const express = require("express");
const router = express.Router();
const {
  homeGet,
  registerPost,
  userLogin,
} = require("../controller/userController.js");

router.get("/", homeGet);
router.post("/register", registerPost);
router.post("/login", userLogin);

module.exports = router;
