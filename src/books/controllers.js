const Book = require("./model");

const findAllBooks = async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find();
  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log("??????", newBook);

  const successResponse = {
    message: "success",
    newBook: newBook,
  };
  response.send(successResponse);
};

const updateBookAuthor = async (request, response) => {
  console.log(request.body);
  const query = { title: request.body.title };
  const updateBookAuthorByTitle = await Book.findOneAndUpdate(query, {
    author: request.body.author,
  });
  const successResponse = {
    message: "success",
    updateBookAuthorByTitle: updateBookAuthorByTitle,
  };
  response.send(successResponse);
};

const deleteBook = async (request, response) => {
  const deleteBook = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
};

module.exports = {
  findAllBooks: findAllBooks,
  addBook: addBook,
  updateBookAuthor: updateBookAuthor,
  deleteBook: deleteBook,
};
