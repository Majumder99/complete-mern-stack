const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");

PORT = process.env.PORT || 8000;
const app = express();

//middleware
app.use(express.json());
app.use(require("./routes/userRoutes"));

// app.get("/", (req, res) => {
//   res.send("Home page");
// });
// app.get("/about", (req, res) => {
//   res.send("about page");
// });
// app.get("/contact", (req, res) => {
//   res.send("contact page");
// });
// app.get("/signin", (req, res) => {
//   res.send("signin page");
// });
// app.get("/signup", (req, res) => {
//   res.send("signup page");
// });

app.listen(PORT, () => {
  console.log(`Server started running at port ${PORT}`);
});

// mongodb+srv://root:root@cluster0.yizcs.mongodb.net/test
