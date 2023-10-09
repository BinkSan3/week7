const express = require("express");

const app = express();

// // http://localhost:5001/
// app.use("/", express.static("blank"));
// // http://localhost:5001/example
// app.use("/example", express.static("example"));

app.use("/", express.static("bookHome"));
app.use("/about", express.static("bookAbout"));
app.use("/contact", express.static("bookContact"));

app.listen(5001, () => {
  console.log("server is listening");
});
