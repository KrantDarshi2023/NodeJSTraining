import {
  getAllBooks,
  getBooksByAuthor,
  deleteBooksByAuthor,
} from "../Services/booksServices.js";

const getAllBooksController = async (req, res) => {
  const allBooks = await getAllBooks();
  res.send(allBooks);
};
const getAllBooksByIdController = async (req, res) => {
  const authorofBooks = req.params.author;
  const allBooksByAuthor = await getBooksByAuthor(authorofBooks);
  res.send(allBooksByAuthor);
};
const deleteBooksByAuthorController = async (req, res) => {
  const authorofBooks = req.params.author;
  const deletedBooks = await deleteBooksByAuthor(authorofBooks);
  if (res.statusCode !== 200) {
    res.send("Books can't be Deleted");
  } else {
    res.send("Books Deleted");
  }
};
const addBooksController = async (req, res) => {
  const data = req.body;
  const updatedBooks = await addBooks(data);
  res.send(updatedBooks);
};
export {
  getAllBooksController,
  getAllBooksByIdController,
  deleteBooksByAuthorController,
  addBooksController,
};
