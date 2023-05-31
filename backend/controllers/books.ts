import { Request, Response } from "express";
import { Book, PrismaClient } from "@prisma/client";

const client = new PrismaClient().book;

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allBooks: Book[] = await client.findMany({include: { library: true }});

    res.status(200).json({ data: allBooks });
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await client.findUnique({ where: { id: bookId } });

    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookData = req.body;
    const book = await client.create({
      data: { ...bookData },
    });

    res.status(201).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookId  = parseInt(req.params.id);
    const bookData = req.body;
    const updatedBook = await client.update({
      where: { id: bookId },
      data: { ...bookData },
    });

    res.status(200).json({ data: updatedBook });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookId  = parseInt(req.params.id);
    await client.delete({ where: { id: bookId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};
