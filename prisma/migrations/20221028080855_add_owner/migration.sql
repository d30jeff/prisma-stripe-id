/*
  Warnings:

  - Added the required column `ownerID` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "ownerID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Owner" (
    "ID" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "Owner"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
