import { Request, Response } from "express";
import { Book, PrismaClient } from "@prisma/client";

const client = new PrismaClient().book;

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = Number(req.headers["authorization"]);
    const allBooks: Book[] = await client.findMany({
      where: { owner: { id: { equals: userId } }, removedAt: { not: null } },
    });
    res.status(200).json(allBooks);
  } catch (error) {
    console.error("Error in getAllBooks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const userId = Number(req.headers["authorization"]);
    const book = await client.findUnique({ where: { id: bookId } });

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    if (book.userId !== userId) {
      res.status(401).json({ error: "Unauthorized, you don't own this book" });
      return;
    }

    const includeOwner = req.query.owner === "true";
    const bookWithOwner = includeOwner ? await client.findUnique({ where: { id: bookId }, include: { owner: true } }) : book;
    res.status(200).json(bookWithOwner);
  } catch (error) {
    console.error("Error in getBookById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = Number(req.headers["authorization"]);
    const bookData = req.body;

    const newBook = await client.create({
      data: {
        ...bookData,
        owner: { connect: { id: userId } }
      },
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error in createBook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookId = Number(req.params.id);

    if (isNaN(bookId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const bookData = req.body;
    const updatedBook = await client.update({
      where: { id: bookId },
      data: { ...bookData },
    });

    if (updatedBook) {
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error in updateBook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = Number(req.headers["authorization"]);
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const book = await client.findUnique({ where: { id: bookId } });

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    if (book.userId !== userId) {
      res.status(401).json({ error: "Unauthorized, you don't own this book" });
      return;
    }

    const updatedBook = await client.update({
      where: { id: bookId },
      data: { removedAt: new Date().toJSON() },
    });

    if (updatedBook) {
      res.status(200).json({});
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

