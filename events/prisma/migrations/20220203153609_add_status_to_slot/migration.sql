/*
  Warnings:

  - You are about to drop the column `complete` on the `Slot` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('PENDING', 'CANCELED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "complete",
ADD COLUMN     "status" "SlotStatus" NOT NULL DEFAULT E'PENDING';
