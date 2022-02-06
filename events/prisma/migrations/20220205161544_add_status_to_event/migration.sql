/*
  Warnings:

  - You are about to drop the column `published` on the `Event` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('REWIEW', 'CANCELED', 'PUBLISHED');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "published",
ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT E'REWIEW';
