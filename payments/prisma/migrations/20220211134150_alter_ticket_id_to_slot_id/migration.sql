/*
  Warnings:

  - You are about to drop the column `ticketId` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slotId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slotId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "ticketId",
ADD COLUMN     "slotId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_slotId_key" ON "Transaction"("slotId");
