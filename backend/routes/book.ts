import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/books";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
//A book is alway connected to a user
bookRouter.post("/:userId", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
