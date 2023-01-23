/*
  Warnings:

  - The values [ISENTO,INDIVIDUAL,DIVIDA,TAXA_UNICA,INCLUSO] on the enum `amountStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `garagem` on the `Imovel` table. All the data in the column will be lost.
  - You are about to drop the column `mobilia` on the `Imovel` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Imovel` table. All the data in the column will be lost.
  - You are about to drop the column `quintal` on the `Imovel` table. All the data in the column will be lost.
  - You are about to drop the column `room` on the `Imovel` table. All the data in the column will be lost.
  - Added the required column `furniture` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garage` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pipedGas` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yard` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `iptu` on the `Imovel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "mobiliaStatus" AS ENUM ('FURNISHED', 'FURNISHEDOFF', 'FURNISHEDSEMI');

-- AlterEnum
BEGIN;
CREATE TYPE "amountStatus_new" AS ENUM ('SHARED', 'UNIQUE', 'INCLUDED');
ALTER TABLE "Imovel" ALTER COLUMN "ilumination" TYPE "amountStatus_new" USING ("ilumination"::text::"amountStatus_new");
ALTER TABLE "Imovel" ALTER COLUMN "water" TYPE "amountStatus_new" USING ("water"::text::"amountStatus_new");
ALTER TYPE "amountStatus" RENAME TO "amountStatus_old";
ALTER TYPE "amountStatus_new" RENAME TO "amountStatus";
DROP TYPE "amountStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Imovel" DROP COLUMN "garagem",
DROP COLUMN "mobilia",
DROP COLUMN "price",
DROP COLUMN "quintal",
DROP COLUMN "room",
ADD COLUMN     "furniture" "mobiliaStatus" NOT NULL,
ADD COLUMN     "garage" INTEGER NOT NULL,
ADD COLUMN     "pipedGas" BOOLEAN NOT NULL,
ADD COLUMN     "rent" INTEGER NOT NULL,
ADD COLUMN     "rooms" INTEGER NOT NULL,
ADD COLUMN     "yard" BOOLEAN NOT NULL,
DROP COLUMN "iptu",
ADD COLUMN     "iptu" INTEGER NOT NULL;
