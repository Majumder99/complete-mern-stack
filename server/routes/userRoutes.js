const express = require("express");
const authentication = require("../middleware/authentication");
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
router.get("/about", authentication, aboutPage);

module.exports = router;
