const express = require("express");
const router = express.Router();
const { homeGet, registerPost } = require("../controller/userController.js");

router.get("/", homeGet);
router.post("/register", registerPost);

module.exports = router;
