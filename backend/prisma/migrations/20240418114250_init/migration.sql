-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `director` VARCHAR(191) NULL,
    `releaseDate` DATETIME(3) NULL,
    `genre` VARCHAR(191) NULL,
    `duration` INTEGER NULL,
    `rating` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
