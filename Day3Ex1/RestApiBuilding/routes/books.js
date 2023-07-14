import {
  addBooksController,
  deleteBooksByAuthorController,
  getAllBooksByIdController,
  getAllBooksController,
  getAllBooksByAuthorController
} from "../Controller/booksController.js";
import { authenticate } from "../middleware/authentication.js";
import bookPostMiddleware from "../middleware/booksMiddleware.js";
import express from "express";
var router = express.Router();

router.get("/",authenticate, getAllBooksController);
router.get("/id/:id", getAllBooksByIdController);
router.get("/:author", getAllBooksByAuthorController);
router.delete("/delete/:authorToDelete", deleteBooksByAuthorController);
router.post("/addBook",bookPostMiddleware, addBooksController);
export default router;
