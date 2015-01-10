DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;


-- Input



-- ---
-- Table 'username'
-- users and IDs
-- ---

-- DROP TABLE IF EXISTS `username`;

-- CREATE TABLE `username` (
--   `id` INTEGER(10) NULL,
--   `username` VARCHAR(20) NULL,
--   PRIMARY KEY (`id`)
-- ) COMMENT 'users and IDs';

-- ---
-- Table 'messages'
-- holds: id, message, room, u_id
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER(10) NULL,
  `username` VARCHAR(20) NULL,
  `message` VARCHAR(144) NULL,
  `roomname` VARCHAR(20) NULL DEFAULT NULL
) COMMENT 'holds: id, message, room, u_id';


--old schema
-- CREATE TABLE `messages` (
--   `id` INTEGER(10) NULL,
--   `u_id` INTEGER(10) NULL DEFAULT NULL,
--   `message` VARCHAR(144) NULL,
--   `roomname` VARCHAR(20) NULL DEFAULT NULL
-- ) COMMENT 'holds: id, message, room, u_id';


-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `username` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `username` (`id`,`username`) VALUES
(0,'Alpheus');
INSERT INTO `messages` (`id`,`u_id`,`message`,`roomname`) VALUES
(0,0,'hi','lobby');



-- Output






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

