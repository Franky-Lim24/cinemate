/*
  Warnings:

  - You are about to drop the column `duration` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `movie` table. All the data in the column will be lost.
  - Added the required column `image` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseYear` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Made the column `director` on table `movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `movie` DROP COLUMN `duration`,
    DROP COLUMN `genre`,
    DROP COLUMN `rating`,
    DROP COLUMN `releaseDate`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `releaseYear` INTEGER NOT NULL,
    MODIFY `director` VARCHAR(191) NOT NULL;
