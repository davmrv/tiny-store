-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('manager', 'client');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" "UserType" NOT NULL DEFAULT E'client';
