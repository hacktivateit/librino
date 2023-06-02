import { Request, Response } from "express";
import { User, PrismaClient } from "@prisma/client";

const client = new PrismaClient().user;

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const includeLibrary = req.query.library === "true";

    const allUsers: User[] = await client.findMany({ include: { library: includeLibrary }});

    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const user = await client.findUnique({  where: { id: userId }});

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in getUserById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserLibraryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const user = await client.findUnique({  where: { id: userId },  include: { library: { include: { book: true} } } })

    if (user) {
      res.status(200).json({ data: user.library });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in getUserLibraryById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userData = req.body;
    const user = await client.create({
      data: { ...userData },
    });

    res.status(201).json({ data: user });
  } catch (error) {
    console.error("Error in createUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId  = parseInt(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const userData = req.body;
    const updatedUser = await client.update({
      where: { id: userId },
      data: { ...userData },
    });

    if (updatedUser) {
      res.status(200).json({ data: updatedUser });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ error: "The ID must be a number" });
      return;
    }

    const deletedUser = await client.delete({ where: { id: userId } });

    if (deletedUser) {
      res.status(200).json({ data: {} });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
