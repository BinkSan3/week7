const Author = require("./model");
const Book = require("../books/model");

const findAllAuthors = async (request, response) => {
  console.log(request.originalUrl);
  const authors = await Author.find();
  const successResponse = {
    message: "success",
    authors: authors,
  };

  response.send(successResponse);
};

const addAuthor = async (request, response) => {
  console.log("HELLOOOOOOOOO!!!!!!");
  const newAuthor = await Author.create({
    authorName: request.body.authorName,
  });
  console.log("??????", newAuthor);

  const successResponse = {
    message: "success",
    newAuthor: newAuthor,
  };
  response.send(successResponse);
};

const findAuthorByName = async (req, res) => {
  const authorFound = await Author.findOne({
    authorName: req.params.authorName,
  });
  const findBooksByAuthor = await Book.find({ author: authorFound.authorName });
  const successMessage = {
    message: "success",
    author: authorFound,
    findBooksByAuthor,
  };
  res.send(successMessage);
};

module.exports = {
  findAllAuthors: findAllAuthors,
  addAuthor: addAuthor,
  findAuthorByName: findAuthorByName,
};
