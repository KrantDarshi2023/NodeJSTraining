import { addBooksController, deleteBooksByAuthorController, getAllBooksByIdController, getAllBooksController } from "../Controller/booksController.js";
import  express from 'express';
var router = express.Router();

router.get('/',getAllBooksController )
router.get('/:author',getAllBooksByIdController )
router.get('/delete/:authorToDelete',deleteBooksByAuthorController )
router.get('/addBook', addBooksController)
export default router