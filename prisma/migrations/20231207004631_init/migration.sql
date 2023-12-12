/*
  Warnings:

  - Added the required column `id_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "id_user" INTEGER NOT NULL;
