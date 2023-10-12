const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  findAllBooks,
  addBook,
  updateBookAuthor,
  deleteBook,
  updateBook,
  updateBookDynamic,
  deleteAllAndOne,
  findBookByTitle,
} = require("./controllers");

//change bookRouter. to bookRouter.
bookRouter.get("/books", findAllBooks);

bookRouter.post("/books", addBook);

bookRouter.put("/books", updateBookAuthor);

bookRouter.delete("/books", deleteBook);

bookRouter.get("/books/:title", findBookByTitle);

bookRouter.put("/books/dynamic", updateBookDynamic);

bookRouter.delete("/books/deletion", deleteAllAndOne);

// at bottom

module.exports = bookRouter;
