const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

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
          res.status(201).json({ msg: "User created" });
        } else {
          res.status(500).json({ msg: "User cannot be created" });
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
        res.status(201).json({ msg: userExist });
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

module.exports = {
  homeGet,
  registerPost,
  userLogin,
};
