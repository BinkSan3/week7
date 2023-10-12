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

const findBookByTitle = async (req, res) => {
  const bookFound = await Book.findOne({ title: req.params.title });
  res.send(bookFound);
};

const updateBookDynamic = async (request, response) => {
  const updateBookDynamically = await Book.findOneAndUpdate(
    { title: request.body.title },
    { [request.body.key]: request.body.value },
    {
      returnDocument: "after",
    }
  );

  const successResponse = {
    message: "success",
    updateBookDynamically: updateBookDynamically,
  };
  response.send(successResponse);
};

const deleteAllAndOne = async (request, response) => {
  if (!request.body.title) {
    const deleteAll = await Book.deleteMany({});
    response.send(`Deleted all`);
  } else {
    const deleteSingle = await Book.deleteOne({ title: request.body.title });
    response.send(`Deleted ${request.body.title}`);
  }
};

module.exports = {
  findAllBooks: findAllBooks,
  addBook: addBook,
  updateBookAuthor: updateBookAuthor,
  deleteBook: deleteBook,
  findBookByTitle: findBookByTitle,
  updateBookDynamic: updateBookDynamic,
  deleteAllAndOne: deleteAllAndOne,
};
