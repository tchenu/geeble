/*
  Warnings:

  - Added the required column `companyId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "companyId" INTEGER NOT NULL;
