import { Request, Response } from "express";
import { User, PrismaClient } from "@prisma/client";

const client = new PrismaClient().user;

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const includeCollection = req.query.collection === "true";

    const allUsers: User[] = await client.findMany({ include: { collection: includeCollection }});

    res.status(200).json( allUsers );
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

    const includeCollection = req.query.collection === "true";

    const user = await client.findUnique({ where: { id: userId }, include:{collection: includeCollection} });

    if (user) {
      res.status(200).json( user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in getUserById:", error);
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

    res.status(201).json( user );
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
      res.status(200).json( updatedUser );
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
      res.status(200).json({});
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
