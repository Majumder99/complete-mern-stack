const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Methods
const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY);
  return token;
};

//routesFunctions
const homeGet = (req, res) => {
  res.send("Hello from the user route");
};

//Using async/await
const registerPost = async (req, res) => {
  //   console.log(req.body);
  //   res.send({ msg: req.body });
  const { name, email, phone, work, password, repassword } = req.body;

  if (!name || !email || !phone || !work || !password || !repassword) {
    res.send({ msg: "Please fill the all fields" });
  } else if (password !== repassword) {
    res.status(402).json({ msg: "Password must be same" });
  } else {
    try {
      const userExist = await User.findOne({ email });
      if (userExist) {
        res.status(522).json({ msg: "User already exist" });
      } else {
        const user = await User.create({
          name,
          email,
          phone,
          work,
          password,
          repassword,
        });
        if (user) {
          res.status(201).json({ msg: "User created", status: 201 });
        } else {
          res.status(500).json({ msg: "User cannot be created", status: 500 });
        }
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

//login page
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).json({ msg: "Fillup all the fields" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (isMatch) {
        const token = generateToken(userExist._id);
        res
          .cookie("jwtoken", token, { httpOnly: true, maxAge: 600000 })
          .json({ msg: userExist, status: 201 });
        console.log(token);
      } else {
        res.status(404).json({ msg: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

//about page
const aboutPage = (req, res) => {
  console.log("Hello from about");
  // res.send(req.token);
  res.json({ token: req.token, status: 201, info: req.userInfo });
};

//contact page
const contactPage = (req, res) => {
  console.log("Hello from contact");
  // res.send(req.token);
  res.json({ token: req.token, status: 201, info: req.userInfo });
};

module.exports = {
  homeGet,
  registerPost,
  userLogin,
  aboutPage,
  contactPage,
};
