-- CreateTable
CREATE TABLE "Slot" (
    "id" SERIAL NOT NULL,
    "transaction" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "user" INTEGER NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
