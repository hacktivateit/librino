import { Request, Response } from "express";
import { Book, PrismaClient } from "@prisma/client";

const client = new PrismaClient().book;

//GOD forgive me for this, there is probably an easier way
//SELECT book WHERE userId = this.userId AND id = bookId
//
//If a book is owned by the user, it returns the book object,
//which is then converted to a boolean using !! to indicate its presence in the collection.
//If no matching book is found, it returns false.
const isBookInCollection = async(userId:number, bookId:number)=>
  !!(await client.findFirst({ "where": {
      "AND": [
        {
          "userId": {
            "equals": userId
          }
        },
        {
          "id": {
            "equals": bookId
          }
        }
      ]
    }
  }));


export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const userId = Number(req.headers["authorization"]);
    const allBooks: Book[] = await client.findMany({ where: { owner: {id: {equals: userId}}}});

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

    if (await isBookInCollection(userId,bookId)){
      const includeOwner = req.query.owner === "true";
      const book = await client.findUnique({ where: { id: bookId }, include:{owner: includeOwner} });
      res.status(200).json( book );
    }
    //Why is not in the collection?
    else {
      const book = await client.findUnique({ where: { id: bookId }});
      if (book){
        res.status(401).json({ error: "Unauthorized, you don't own this book" });
      }
      else{
        res.status(404).json({error: "Book not Found"});
      }
    }
  } catch (error) {
    console.error("Error in getBookById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//A Book is always associated with the user created it
//Check if req.body is formed nicely
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
    const bookId  = Number(req.params.id);

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
    const userId = Number(req.headers["authorization"]);
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    if (await isBookInCollection(userId,bookId)){
      const deletedBook = await client.delete({ where: { id: bookId } });
      if (deletedBook) {
        res.status(200).json( {} );
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    }
    else{
      res.status(401).json({ error: "Unauthorized, you don't own this book" });
    }

  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
