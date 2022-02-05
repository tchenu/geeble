/*
  Warnings:

  - You are about to drop the column `user` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Slot` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "user",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "user",
ADD COLUMN     "userId" INTEGER NOT NULL;
