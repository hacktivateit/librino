/*
  Warnings:

  - You are about to drop the column `completion` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `dateAdded` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `dateRemoved` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `_BookToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_B_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "completion",
DROP COLUMN "dateAdded",
DROP COLUMN "dateRemoved";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bookId" INTEGER;

-- DropTable
DROP TABLE "_BookToUser";

-- CreateTable
CREATE TABLE "Library" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removedAt" TIMESTAMP(3),
    "timesCompleted" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Library" ADD CONSTRAINT "Library_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Library" ADD CONSTRAINT "Library_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
