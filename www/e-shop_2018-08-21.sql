# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Database: e-shop
# Generation Time: 2018-08-21 15:54:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `category_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `item_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `item_name` varchar(250) NOT NULL DEFAULT '',
  `item_price` int(11) NOT NULL,
  `item_description` varchar(250) NOT NULL,
  `item_content` varchar(1000) NOT NULL DEFAULT '',
  `category_id` int(11) NOT NULL,
  `item_position` int(1) NOT NULL,
  `item_image` varchar(250) DEFAULT NULL,
  `item_evaluation` float DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table reviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `review_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `review_content` varchar(1000) DEFAULT '',
  `review_author_id` int(11) NOT NULL,
  `review_author_name` varchar(250) NOT NULL DEFAULT '',
  `item_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `item_evaluation` int(1) NOT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_pass` varchar(255) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(70) NOT NULL DEFAULT '',
  `role` varchar(128) NOT NULL DEFAULT '',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
