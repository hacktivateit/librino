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
bookRouter.get("/lib/:id", getLibraryByUserId);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
