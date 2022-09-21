const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});
app.get("/signin", (req, res) => {
  res.send("signin page");
});
app.get("/signup", (req, res) => {
  res.send("signup page");
});

app.listen(3000, () => {
  console.log("Port started to listening at 3000");
});
