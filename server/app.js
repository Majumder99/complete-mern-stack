const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
require("./db/conn");

PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(require("./routes/userRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/", (req, res) => {
//   res.json({ msg: "we are here" });
// });

app.listen(PORT, () => {
  console.log(`Server started running at port ${PORT}`);
});

// mongodb+srv://root:root@cluster0.yizcs.mongodb.net/test
