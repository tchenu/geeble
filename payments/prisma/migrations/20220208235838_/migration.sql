-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "refundId" TEXT,
ALTER COLUMN "status" SET DEFAULT E'init';
