/*
  Warnings:

  - The values [CANCELED,PROCESSING,REQUIRES_ACTION,REQUIRES_CAPTURE,REQUIRES_CONFIRMATION,REQUIRES_PAYMENT_METHOD,SUCCEEDED] on the enum `TransactionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionStatus_new" AS ENUM ('canceled', 'processing', 'requires_action', 'requires_capture', 'requires_confirmation', 'requires_payment_method', 'succeeded');
ALTER TABLE "Transaction" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Transaction" ALTER COLUMN "status" TYPE "TransactionStatus_new" USING ("status"::text::"TransactionStatus_new");
ALTER TYPE "TransactionStatus" RENAME TO "TransactionStatus_old";
ALTER TYPE "TransactionStatus_new" RENAME TO "TransactionStatus";
DROP TYPE "TransactionStatus_old";
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT 'requires_payment_method';
COMMIT;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT E'requires_payment_method';
