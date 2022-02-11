/*
  Warnings:

  - The values [INIT,CAPTURED,FAILED,REFUNDED] on the enum `TransactionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionStatus_new" AS ENUM ('CANCELED', 'PROCESSING', 'REQUIRES_ACTION', 'REQUIRES_CAPTURE', 'REQUIRES_CONFIRMATION', 'REQUIRES_PAYMENT_METHOD', 'SUCCEEDED');
ALTER TABLE "Transaction" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Transaction" ALTER COLUMN "status" TYPE "TransactionStatus_new" USING ("status"::text::"TransactionStatus_new");
ALTER TYPE "TransactionStatus" RENAME TO "TransactionStatus_old";
ALTER TYPE "TransactionStatus_new" RENAME TO "TransactionStatus";
DROP TYPE "TransactionStatus_old";
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT 'REQUIRES_PAYMENT_METHOD';
COMMIT;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT E'REQUIRES_PAYMENT_METHOD';
