require("dotenv").config();

const express = require("express");
console.log("!!!!!!!", process.env.MONGODB_URI);

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
}

connection();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

app.get("/books", async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find();
  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
});

app.post("/books", async (request, response) => {
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
});

app.put("/books", async (request, response) => {
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
});

app.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
});

app.get("/books/:id", async (req, res) => {
  // const bookName = req.params;
  // console.log(bookName);
  const id = req.params.id * 1;
  console.log(id);

  res.send("TESTESTEST");
});

app.listen(5001, () => {
  console.log("server is listening");
});
