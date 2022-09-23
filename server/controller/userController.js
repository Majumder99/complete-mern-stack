const homeGet = (req, res) => {
  res.send("Hello from the user route");
};

const registerPost = (req, res) => {
  console.log(req.body);
  res.send({ msg: req.body });
};

module.exports = {
  homeGet,
  registerPost,
};
