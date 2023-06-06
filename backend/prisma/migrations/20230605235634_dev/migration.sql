/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "author" DROP NOT NULL,
ALTER COLUMN "ISBN" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_userId_key" ON "Book"("userId");
