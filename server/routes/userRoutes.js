const express = require("express");
const authentication = require("../middleware/authentication");
const router = express.Router();
const {
  homeGet,
  registerPost,
  userLogin,
  aboutPage,
  contactPage,
  contactPostPage,
} = require("../controller/userController.js");

router.get("/", homeGet);
router.post("/register", registerPost);
router.post("/login", userLogin);
router.get("/about", authentication, aboutPage);
router.get("/contact", authentication, contactPage);
router.post("/contact", authentication, contactPostPage);

module.exports = router;
