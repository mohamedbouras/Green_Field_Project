-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema e-education
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema e-education
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `e-education` DEFAULT CHARACTER SET utf8mb3 ;
USE `e-education` ;

-- -----------------------------------------------------
-- Table `e-education`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-education`.`event` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `event_name` VARCHAR(45) NOT NULL,
  `event_description` LONGTEXT NOT NULL,
  `event_time` DATE NOT NULL,
  `event_image` LONGTEXT NOT NULL,
  `event_participants` INT NOT NULL,
  `event_status` TINYINT NOT NULL,
  PRIMARY KEY (`event_id`))
ENGINE = InnoDB

DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `e-education`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-education`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(60) NOT NULL,
  `user_password` VARCHAR(500) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  `user_image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `UQ_user_email` (`user_email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `e-education`.`event_has_user`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `e-education`.`event_has_user` (
  `event_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`event_id`, `user_id`),
  INDEX `fk_Event_has_User_Event_idx` (`event_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `e-education`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-education`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(60) NOT NULL,
  `user_password` VARCHAR(500) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  `user_image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO event (event_name, event_description, event_time, event_image, event_participants, event_status) VALUES ('Web Development Workshop', 'Join us for a hands-on workshop covering the basics of web development.', '2023-05-20', 'https://placebeard.it/640x360', 0, 0);
INSERT INTO event (event_name, event_description, event_time, event_image, event_participants, event_status) VALUES ('Virtual Career Fair', 'Connect with top employers in the tech industry from the comfort of your own home.', '2023-06-15', 'https://placebeard.it/640x360', 0, 0);
INSERT INTO event (event_name, event_description, event_time, event_image, event_participants, event_status) VALUES ('Data Science Bootcamp', 'Get a comprehensive introduction to data science and learn how to work with large datasets.', '2023-07-10', 'https://placebeard.it/640x360', 0, 0);
INSERT INTO event (event_name, event_description, event_time, event_image, event_participants, event_status) VALUES ('Python Programming Course', 'Learn the fundamentals of Python programming and build your first projects.', '2023-08-01', 'https://placebeard.it/640x360', 0, 0);
INSERT INTO event (event_name, event_description, event_time, event_image, event_participants, event_status) VALUES ('Cybersecurity Symposium', 'Hear from industry experts on the latest trends and strategies in cybersecurity.', '2023-09-05', 'https://placebeard.it/640x360', 0, 0);


