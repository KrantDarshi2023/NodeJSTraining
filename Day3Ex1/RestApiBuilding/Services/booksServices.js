import fs from "fs/promises";
import createHttpError from "http-errors";
import _ from "lodash";

const getAllBooks = async () => {
  try {
    const books = await fs.readFile(
      "/Users/krantd/Desktop/Node_Training/Day3Ex1/RestApiBuilding/Database/books.json"
    );
    return JSON.parse(books);
  } catch (e) {
    return createHttpError(500, e.message);
  }
};
const getBooksByAuthor = async (author) => {
  try {
    const books = await getAllBooks();
    const booksByAuthor = _.find(books, (item) => {
      return item.author === author;
    });
    return booksByAuthor;
  } catch (e) {
    return createHttpError(500, e.message);
  }
};
const deleteBooksByAuthor = async (author) => {
  try {
    let books = await fs.readFile(
      "/Users/krantd/Desktop/Node_Training/Day3Ex1/RestApiBuilding/Database/books.json"
    );
    let booksToBeDeleted = _.filter(books, (item) => {
      return item.author === author;
    });
    return booksToBeDeleted;
  } catch (e) {
    return createHttpError(500, e.message);
  }
};
const addBooks = async (data) => {
  try {
    let books = await getAllBooks();
    let updatedBooks = books.push(data);
    return updatedBooks;
  } catch (e) {
    return createHttpError(500, e.message);
  }
};
export { getAllBooks, getBooksByAuthor, deleteBooksByAuthor, addBooks };
