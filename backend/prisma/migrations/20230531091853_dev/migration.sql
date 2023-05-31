/*
  Warnings:

  - You are about to drop the column `bookId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "synopsis" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bookId";
