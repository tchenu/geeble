/*
  Warnings:

  - A unique constraint covering the columns `[intentionId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Transaction_intentionId_key" ON "Transaction"("intentionId");
