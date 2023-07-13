import {
  addBooksController,
  deleteBooksByAuthorController,
  getAllBooksByIdController,
  getAllBooksController,
} from "../Controller/booksController.js";
import express from "express";
var router = express.Router();

router.get("/", getAllBooksController);
router.get("/:author", getAllBooksByIdController);
router.delete("/delete/:authorToDelete", deleteBooksByAuthorController);
router.post("/addBook", addBooksController);
export default router;
