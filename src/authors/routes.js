const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");
const {
  findAllAuthors,
  addAuthor,
  findAuthorByName,
} = require("./controllers");

//change bookRouter. to bookRouter.
authorRouter.get("/authors", findAllAuthors);

authorRouter.post("/authors", addAuthor);

authorRouter.get("/authors/:authorName", findAuthorByName);

// authorRouter.put("/books");

// at bottom

module.exports = authorRouter;
