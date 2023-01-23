/*
  Warnings:

  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "amountStatus" AS ENUM ('ISENTO', 'INDIVIDUAL', 'DIVIDA', 'TAXA_UNICA', 'INCLUSO');

-- DropTable
DROP TABLE "Setting";

-- CreateTable
CREATE TABLE "Imovel" (
    "id" SERIAL NOT NULL,
    "area" INTEGER NOT NULL,
    "room" INTEGER NOT NULL,
    "bathroom" INTEGER NOT NULL,
    "garagem" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "condominium" INTEGER NOT NULL,
    "iptu" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "pet" BOOLEAN NOT NULL,
    "mobilia" BOOLEAN NOT NULL,
    "quintal" BOOLEAN NOT NULL,
    "ilumination" "amountStatus" NOT NULL,
    "water" "amountStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Imovel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressImovel" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "addressDetail" VARCHAR(255),
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "AddressImovel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photosImmobile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "photosImmobile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressImovel_imovelId_key" ON "AddressImovel"("imovelId");

-- AddForeignKey
ALTER TABLE "AddressImovel" ADD CONSTRAINT "AddressImovel_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosImmobile" ADD CONSTRAINT "photosImmobile_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
