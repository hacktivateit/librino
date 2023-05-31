/*
  Warnings:

  - A unique constraint covering the columns `[userId,bookId]` on the table `Entry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Entry_userId_bookId_key" ON "Entry"("userId", "bookId");
