const User = require("../models/userSchema");

const homeGet = (req, res) => {
  res.send("Hello from the user route");
};

// const registerPost = (req, res) => {
//   //   console.log(req.body);
//   //   res.send({ msg: req.body });
//   const { name, email, phone, work, password, repassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !repassword) {
//     res.send({ msg: "Please fill the all fields" });
//   }
//   User.findOne({ email })
//     .then((userExist) => {
//       if (userExist) {
//         console.log("user already exist");
//       }
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         repassword,
//       });
//       user
//         .save()
//         .then(() =>
//           res.status(201).json({ msg: "New user registered successfully" })
//         )
//         .catch((e) => console.log(e));
//     })
//     .catch((e) => console.log(e));
// };

//Using async/await
const registerPost = async (req, res) => {
  //   console.log(req.body);
  //   res.send({ msg: req.body });
  const { name, email, phone, work, password, repassword } = req.body;

  if (!name || !email || !phone || !work || !password || !repassword) {
    res.send({ msg: "Please fill the all fields" });
  }
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
};

module.exports = {
  homeGet,
  registerPost,
};
