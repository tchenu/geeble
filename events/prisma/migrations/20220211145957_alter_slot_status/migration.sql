/*
  Warnings:

  - The values [REFOUND] on the enum `SlotStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SlotStatus_new" AS ENUM ('PENDING', 'CANCELED', 'COMPLETED', 'REFUND');
ALTER TABLE "Slot" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Slot" ALTER COLUMN "status" TYPE "SlotStatus_new" USING ("status"::text::"SlotStatus_new");
ALTER TYPE "SlotStatus" RENAME TO "SlotStatus_old";
ALTER TYPE "SlotStatus_new" RENAME TO "SlotStatus";
DROP TYPE "SlotStatus_old";
ALTER TABLE "Slot" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
