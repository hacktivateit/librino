import { Request, Response } from "express";
import { User, PrismaClient } from "@prisma/client";

const client = new PrismaClient().user;

//Register
export const signUp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
  }
};

//Login
export const signIn = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
  }
};

//Logout
export const signOut = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
  }
};
