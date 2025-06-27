-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema peluditos_care
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema peluditos_care
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `peluditos_care` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `peluditos_care` ;

-- -----------------------------------------------------
-- Table `peluditos_care`.`caregiver_information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`caregiver_information` (
  `id_caregiver` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `birthdate` DATE NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `street` VARCHAR(100) NOT NULL,
  `street_number` VARCHAR(100) NULL,
  `zip_code` VARCHAR(30) NOT NULL,
  `about_me` TEXT NOT NULL,
  `expertise` TINYINT NOT NULL,
  `years_of_experience` VARCHAR(20) NOT NULL,
  `url_profile_picture` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id_caregiver`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`owner_information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`owner_information` (
  `id_owner` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `birthdate` DATE NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `street` VARCHAR(100) NOT NULL,
  `street_number` VARCHAR(12) NOT NULL,
  `zip_code` VARCHAR(7) NOT NULL,
  `about_me` TEXT NOT NULL,
  `url_profile_picture` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id_owner`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`caregiver_reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`caregiver_reviews` (
  `id_caregiver_review` BIGINT NOT NULL AUTO_INCREMENT,
  `score` INT NOT NULL,
  `name` VARCHAR(70) NOT NULL,
  `last_name` VARCHAR(90) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` TEXT NOT NULL,
  `fk_owner` BIGINT NOT NULL,
  `fk_caregiver` BIGINT NOT NULL,
  PRIMARY KEY (`id_caregiver_review`),
  INDEX `fk_Caregiver_reviews_Owner_Information1_idx` (`fk_owner` ASC) VISIBLE,
  INDEX `fk_caregiver_reviews_caregiver_information1_idx` (`fk_caregiver` ASC) VISIBLE,
  CONSTRAINT `fk_owner_Information`
    FOREIGN KEY (`fk_owner`)
    REFERENCES `peluditos_care`.`owner_information` (`id_owner`),
  CONSTRAINT `fk_caregiver_reviews_caregiver_information1`
    FOREIGN KEY (`fk_caregiver`)
    REFERENCES `peluditos_care`.`caregiver_information` (`id_caregiver`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`service_cost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`service_cost` (
  `id_service_cost` BIGINT NOT NULL AUTO_INCREMENT,
  `amount` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `fk_caregiver` BIGINT NOT NULL,
  PRIMARY KEY (`id_service_cost`, `fk_caregiver`),
  INDEX `fk_service_cost_caregiver_information1_idx` (`fk_caregiver` ASC) VISIBLE,
  CONSTRAINT `fk_service_cost_caregiver_information1`
    FOREIGN KEY (`fk_caregiver`)
    REFERENCES `peluditos_care`.`caregiver_information` (`id_caregiver`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`user_roles` (
  `id_role` BIGINT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(60) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id_role`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`owner_caregiver_has_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`owner_caregiver_has_roles` (
  `id_owner` BIGINT NOT NULL,
  `id_caregiver` BIGINT NOT NULL,
  `id_role` BIGINT NOT NULL,
  INDEX `fk_Owner_Information_has_Caregiver_information_Caregiver_in_idx` (`id_caregiver` ASC) VISIBLE,
  INDEX `fk_Owner_Information_has_Caregiver_information_Owner_Inform_idx` (`id_owner` ASC) VISIBLE,
  INDEX `fk_Owner_Information_has_Caregiver_information_User_Rights1_idx` (`id_role` ASC) VISIBLE,
  PRIMARY KEY (`id_owner`, `id_caregiver`, `id_role`),
  CONSTRAINT `fk_Owner_Information_has_Caregiver_information_Caregiver_info1`
    FOREIGN KEY (`id_caregiver`)
    REFERENCES `peluditos_care`.`caregiver_information` (`id_caregiver`),
  CONSTRAINT `fk_Owner_Information_has_Caregiver_information_Owner_Informat1`
    FOREIGN KEY (`id_owner`)
    REFERENCES `peluditos_care`.`owner_information` (`id_owner`),
  CONSTRAINT `fk_Owner_Information_has_Caregiver_information_User_Rights1`
    FOREIGN KEY (`id_role`)
    REFERENCES `peluditos_care`.`user_roles` (`id_role`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`owner_reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`owner_reviews` (
  `id_owner_review` BIGINT NOT NULL AUTO_INCREMENT,
  `score` INT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` TEXT NOT NULL,
  `fk_caregiver` BIGINT NOT NULL,
  `fk_owner` BIGINT NOT NULL,
  PRIMARY KEY (`id_owner_review`),
  INDEX `fk_Owner_Reviews_Caregiver_information1_idx` (`fk_caregiver` ASC) VISIBLE,
  INDEX `fk_Owner_Reviews_Owner_Information1_idx` (`fk_owner` ASC) VISIBLE,
  CONSTRAINT `fk_caregiver`
    FOREIGN KEY (`fk_caregiver`)
    REFERENCES `peluditos_care`.`caregiver_information` (`id_caregiver`),
  CONSTRAINT `fk_owner`
    FOREIGN KEY (`fk_owner`)
    REFERENCES `peluditos_care`.`owner_information` (`id_owner`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`pets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`pets` (
  `id_pets` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `behavior` VARCHAR(60) NOT NULL,
  `age` INT NOT NULL,
  `description` TEXT NOT NULL,
  `url_pet_picture` VARCHAR(400) NOT NULL,
  `fk_owner` BIGINT NOT NULL,
  PRIMARY KEY (`id_pets`, `fk_owner`),
  INDEX `fk_pets_owner_information1_idx` (`fk_owner` ASC) VISIBLE,
  CONSTRAINT `fk_pets_owner_information1`
    FOREIGN KEY (`fk_owner`)
    REFERENCES `peluditos_care`.`owner_information` (`id_owner`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `peluditos_care`.`type_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peluditos_care`.`type_services` (
  `id_service` BIGINT NOT NULL AUTO_INCREMENT,
  `type_service` VARCHAR(60) NOT NULL,
  `description` TEXT NOT NULL,
  `service_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_owner` BIGINT NOT NULL,
  `fk_caregiver` BIGINT NOT NULL,
  `fk_service_cost` BIGINT NOT NULL,
  PRIMARY KEY (`id_service`, `fk_owner`, `fk_caregiver`, `fk_service_cost`),
  INDEX `fk_type_services_owner_information1_idx` (`fk_owner` ASC) VISIBLE,
  INDEX `fk_type_services_caregiver_information1_idx` (`fk_caregiver` ASC, `fk_service_cost` ASC) VISIBLE,
  CONSTRAINT `fk_type_services_owner_information1`
    FOREIGN KEY (`fk_owner`)
    REFERENCES `peluditos_care`.`owner_information` (`id_owner`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_type_services_caregiver_information1`
    FOREIGN KEY (`fk_caregiver`)
    REFERENCES `peluditos_care`.`caregiver_information` (`id_caregiver`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
