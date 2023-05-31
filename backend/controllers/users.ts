import { Request, Response } from "express";
import { User , PrismaClient } from "@prisma/client";

const client = new PrismaClient().user;

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allUsers: User[] = await client.findMany();

    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);
    const user = await client.findUnique({ where: { id: userId } });

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId  = parseInt(req.params.id);
    const userData = req.body;
    const updatedUser = await client.update({
      where: { id: userId },
      data: { ...userData },
    });

    res.status(200).json({ data: updatedUser });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId  = parseInt(req.params.id);
    await client.delete({ where: { id: userId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};
