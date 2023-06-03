import { Request, Response } from "express";
import { User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Register
export const signUp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, surname, email } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create user
    const user = await prisma.user.create({
      data: { name, surname, email },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
export const signIn = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout
export const signOut = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Perform any necessary logout operations (e.g., clear session, tokens, etc.)
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

