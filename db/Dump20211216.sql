-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: quadbtest
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` text NOT NULL,
  `user_image` text NOT NULL,
  `total_orders` int DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `img_public_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('04799ece-62cb-4ebb-8fe8-25cc97f664db','Alex','alex@gmail.com','$2b$10$fDA1kLjnmbXlADxui3j.NeVDhfcNDK.1Bjo4ignYezZzlkCE14AC2','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639659771/eiqy73mmnveg0ouurb8a.jpg',10,'2021-12-16 13:02:49','2021-12-16 14:34:59','eiqy73mmnveg0ouurb8a','2021-12-16 13:02:49','2021-12-16 14:35:41'),('0d8c8dfe-0ae4-4572-8310-c5fcc199dbbb','Jim Carrey','jim@carrey.com','$2b$10$DSLdK2fxQqc7d7jzmxgUDehzN9cX1rZx1XFmqWB.EchWOYhmZUT9y','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666642/kejwzjyrncqq96gihljt.jpg',5,'2021-12-16 14:57:20',NULL,'kejwzjyrncqq96gihljt','2021-12-16 14:57:20','2021-12-16 14:57:20'),('1cefc76c-110a-4e6a-b230-c5f8154ab50c','Chota Bheem','bheem@gmail.com','$2b$10$e9RdyQgHJehy27fApjjxN.arbRMZlQ1I.drtM.12r7IYyAkebuHgK','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639659980/erua6cocomhnd8b4cr4z.jpg',122,'2021-12-16 13:06:18','2021-12-16 14:31:57','erua6cocomhnd8b4cr4z','2021-12-16 13:06:18','2021-12-16 14:32:16'),('60fbac76-06da-4887-bbff-13f6d52b6c55','James Stewart','james@stewart.com','$2b$10$x20vpRh/FDJK13cp6/36iO8Cwguh1gydGtaJXXwA4rRJTKgx19Oh.','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666890/vucqlibhbesxptgq7cf2.jpg',4,'2021-12-16 15:01:27',NULL,'vucqlibhbesxptgq7cf2','2021-12-16 15:01:27','2021-12-16 15:01:27'),('957a0d2c-1807-42c1-a76d-d2184fec97b5','Goldie Hawn','goldie@hawn.com','$2b$10$dyZLY1eTn41W0/2uJ28DY.W8pFdvrsvf/7WCZ/qGMKsHmvnV1M/lq','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666802/ionkqdgr0nc1ra05z7rg.jpg',14,'2021-12-16 15:00:00',NULL,'ionkqdgr0nc1ra05z7rg','2021-12-16 15:00:00','2021-12-16 15:00:00'),('d01d2d18-f221-4fb5-890f-00f364a88345','Johnny Depp','johnny@depp.in','$2b$10$AMQQLxEohxr1ggpJx8Ecm.q0KZmTDKfaq6TMjvsBgK/ccA3bso7Im','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666692/jjsajbwvii6tq3wgcdia.jpg',8,'2021-12-16 14:58:10',NULL,'jjsajbwvii6tq3wgcdia','2021-12-16 14:58:10','2021-12-16 14:58:10'),('ed078aa9-b557-40fb-aa18-10fb5f830861','Tippi Hedren','tippi@hedren.com','$2b$10$NhpLsSg.xbpV5EjiIcptzeBSbb2XqhWFieWc/s8BQTct7HocEKWay','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666745/wl1mjczrkzbr6n1flp7d.jpg',11,'2021-12-16 14:59:02',NULL,'wl1mjczrkzbr6n1flp7d','2021-12-16 14:59:02','2021-12-16 14:59:02'),('fcc9bdd4-d014-4b0c-96ac-5e123b8f5311','Macauley Culkin','macauley@culkin.com','$2b$10$UARH70jjyYUVyP0bfNV84uTuLrieIfUsxIOy0ndh4vpzZUrMoeT5.','https://res.cloudinary.com/rajeswar-qb-test/image/upload/v1639666597/foc8junopsmbkmkq9gir.jpg',6,'2021-12-16 14:56:34','2021-12-16 15:06:35','foc8junopsmbkmkq9gir','2021-12-16 14:56:34','2021-12-16 15:06:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-16 20:49:42
