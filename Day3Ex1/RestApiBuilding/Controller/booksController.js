import {
  getAllBooks,
  getBooksByAuthor,
  deleteBooksByAuthor,
  addBooks,
  getBooksById
} from "../Services/booksServices.js";

const getAllBooksController = async (req, res) => {
  const allBooks = await getAllBooks();
  res.send(allBooks);
};
const getAllBooksByAuthorController = async (req, res) => {
  const authorofBooks = req.params.author;
  const allBooksByAuthor = await getBooksByAuthor(authorofBooks);
  res.send(allBooksByAuthor);
};
const getAllBooksByIdController = async (req, res) => {
    const idOfBooks = req.params.id;
    const allBooksById = await getBooksById(idOfBooks);
    res.send(allBooksById);
  };
const deleteBooksByAuthorController = async (req, res) => {
  const authorofBooks = req.params.authorToDelete;
  const deletedBooks = await deleteBooksByAuthor(authorofBooks);
  if (res.statusCode !== 200) {
    res.send("Books can't be Deleted");
  } else {
    res.send(`${deleteBooksByAuthor} Books Deleted`);
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
  getAllBooksByAuthorController
};
