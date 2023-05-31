-- MySQL Script generated by MySQL Workbench
-- Thu May 18 17:18:18 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema F-goal
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `F-goal` ;

-- -----------------------------------------------------
-- Schema F-goal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `F-goal` DEFAULT CHARACTER SET utf8 ;
USE `F-goal` ;

-- -----------------------------------------------------
-- Table `F-goal`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `F-goal`.`User` ;

CREATE TABLE IF NOT EXISTS `F-goal`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `F-goal`.`Category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `F-goal`.`Category` ;

CREATE TABLE IF NOT EXISTS `F-goal`.`Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `F-goal`.`Post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `F-goal`.`Post` ;

CREATE TABLE IF NOT EXISTS `F-goal`.`Post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `category_id` INT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `F-goal`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `F-goal`.`Like`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `F-goal`.`Like` ;

CREATE TABLE IF NOT EXISTS `F-goal`.`Like` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `post_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `post_id_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `F-goal`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `post_id`
    FOREIGN KEY (`post_id`)
    REFERENCES `F-goal`.`Post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `F-goal`.`Comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `F-goal`.`Comment` ;

CREATE TABLE IF NOT EXISTS `F-goal`.`Comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TINYTEXT NOT NULL,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `post_id_idx` (`post_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `post_id_p`
    FOREIGN KEY (`post_id`)
    REFERENCES `F-goal`.`Post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id_u`
    FOREIGN KEY (`user_id`)
    REFERENCES `F-goal`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;