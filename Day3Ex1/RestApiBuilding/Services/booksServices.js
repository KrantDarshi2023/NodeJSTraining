
import _ from "lodash";
import BooksModel from "../Schema/bookSchema.js";

const getAllBooks = async () => {
  try {
    const books = await BooksModel.find();
    return books;
  } catch (e) {
    return e.message;
  }
};
const getBooksByAuthor = async (author) => {
  try {
    const booksByAuthor = await BooksModel.find({author:author})
    return booksByAuthor;
  } catch (e) {
    return e.message;
  }
};
const getBooksById = async (id) => {
    try {
      const booksByAuthor = await BooksModel.find({_id:id})
      return booksByAuthor;
    } catch (e) {
      return e.message;
    }
  };
const deleteBooksByAuthor = async (author) => {
  try {
    let booksToBeDeleted = await BooksModel.deleteMany({author:author})
    const {deletedCount} = booksToBeDeleted
    return deletedCount;
  } catch (e) {
    return e.message;
  }
};
const addBooks = async (data) => {
  try {
     let addedBooks=BooksModel.create(data)
    return addedBooks;
  } catch (e) {
    return e.message;
  }
};
export { getAllBooks, getBooksByAuthor, deleteBooksByAuthor, addBooks,getBooksById };
