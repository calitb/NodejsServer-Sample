DROP DATABASE IF EXISTS `test`;
CREATE DATABASE `test`;
USE `test`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `user` (`id`, `name`) VALUES
(1,     'carlos'),
(2,     'alejo');
