const User = require("../models/userSchema");

const homeGet = (req, res) => {
  res.send("Hello from the user route");
};

const registerPost = (req, res) => {
  //   console.log(req.body);
  //   res.send({ msg: req.body });
  const { name, email, phone, work, password, repassword } = req.body;
  if (!name || !email || !phone || !work || !password || !repassword) {
    res.send({ msg: "Please fill the all fields" });
  }
  User.findOne({ email })
    .then((userExist) => {
      if (userExist) {
        console.log("user already exist");
      }
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        repassword,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({ msg: "New user registered successfully" })
        )
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

module.exports = {
  homeGet,
  registerPost,
};
