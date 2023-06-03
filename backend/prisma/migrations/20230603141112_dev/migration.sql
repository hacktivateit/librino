/*
  Warnings:

  - You are about to drop the column `timesCompleted` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,id]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "timesCompleted",
ADD COLUMN     "completion" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Book_userId_id_key" ON "Book"("userId", "id");
