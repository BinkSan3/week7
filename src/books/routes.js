const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  findAllBooks,
  addBook,
  updateBookAuthor,
  deleteBook,
} = require("./controllers");

//change bookRouter. to bookRouter.
bookRouter.get("/books", findAllBooks);

bookRouter.post("/books", addBook);

bookRouter.put("/books", updateBookAuthor);

bookRouter.delete("/books", deleteBook);

// bookRouter.get("/books/:id", async (req, res) => {
//   // const bookName = req.params;
//   // console.log(bookName);
//   const id = req.params.id * 1;
//   console.log(id);

//   res.send("TESTESTEST");
// });

// at bottom

module.exports = bookRouter;
