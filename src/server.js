require("dotenv").config();
const express = require("express");
console.log("!!!!!!!", process.env.MONGODB_URI);

require("./db/connection");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const app = express();

app.use(express.json());

app.use(bookRouter);
app.use(authorRouter);

app.listen(5001, () => {
  console.log("server is listening");
});
