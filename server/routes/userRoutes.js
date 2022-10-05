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
  alldata,
  logoutPage,
} = require("../controller/userController.js");

router.get("/", homeGet);
router.post("/register", registerPost);
router.post("/login", userLogin);
router.get("/about", authentication, aboutPage);
router.get("/contact", authentication, contactPage);
router.post("/contact", authentication, contactPostPage);
router.get("/logout", authentication, logoutPage);
router.get("/alldata", alldata);

module.exports = router;
