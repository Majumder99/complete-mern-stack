const mongoose = require("mongoose");
const DB = process.env.Database;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Server is connected");
  })
  .catch((e) => console.log(e.message));
