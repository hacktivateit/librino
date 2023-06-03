import { Request, Response } from "express";
import { Book, PrismaClient } from "@prisma/client";

const client = new PrismaClient().book;

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const includeOwner = req.query.owner === "true";

    const allBooks: Book[] = await client.findMany({ include: { owner: includeOwner }});

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

    const includeOwner = req.query.owner === "true";

    const book = await client.findUnique({ where: { id: bookId }, include:{owner: includeOwner} });

    if (book) {
      res.status(200).json( book );
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error in getBookById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getLibraryByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const uid = parseInt(req.params.userId);

    if (isNaN(uid)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const libr = await client.findMany({where:{owner:{some:{userId:{equals: uid}}}},include:{owner:false}})

    if (libr) {
      res.status(200).json( libr );
    } else {
      res.status(404).json({ error: "User  not found" });
    }
  } catch (error) {
    console.error("Error in getLibraryByUserId:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const uid = parseInt(req.params.userId);

    if (isNaN(uid)) {
      res.status(400).json({ error: "The userId must be a number" });
      return;
    }

    const bookData = req.body;
    const newBook = await client.create({
      data: {
        ...bookData,
        owner:{
          create:[
            {entry:{connect:{user:1}}}
          ]
        }
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
    const bookId  = parseInt(req.params.id);

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
      res.status(200).json( updatedBook );
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
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
      res.status(400).json({ error: "Invalid book ID" });
      return;
    }

    const deletedBook = await client.delete({ where: { id: bookId } });

    if (deletedBook) {
      res.status(200).json( {} );
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
