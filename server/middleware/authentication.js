const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies;
    const verifyToken = jwt.verify(token.jwtoken, process.env.SECRET_KEY);
    const userInfo = await User.findOne({ _id: verifyToken.id });
    // console.log(verifyToken.id);
    if (!userInfo) {
      throw new Error("user not found");
    }
    req.token = token;
    req.userInfo = userInfo;
    req.userId = userInfo._id;
    next();
  } catch (error) {
    res.status(401).json({ msg: "No token" });
    console.log(error);
  }
  //   const token = req.cookies;
  //   console.log(token.jwtoken);
  //   req.token = token;
};
module.exports = authentication;
