import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  getLibraryByUserId,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/books";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
//Get array of book of userId
bookRouter.get("/lib/:userId", getLibraryByUserId);
//A book is alway connected to a user
bookRouter.post("/:userId", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
