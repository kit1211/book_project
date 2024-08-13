-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 13, 2024 at 09:28 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_learning`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_search_books_by_id` (IN `bookid` INT)   BEGIN
    SELECT title, author, published_year, genre, rating
    FROM books
    WHERE id = bookid;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `published_year` int NOT NULL,
  `genre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `published_year`, `genre`, `rating`, `created_at`, `updated_at`) VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction', '4.27', '2024-08-13 12:00:00', '2024-08-13 12:00:00'),
(2, '1984', 'George Orwell', 1949, 'Dystopian', '4.17', '2024-08-13 12:00:00', '2024-08-13 12:00:00'),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic', '3.91', '2024-08-13 12:00:00', '2024-08-13 12:00:00'),
(4, 'The Catcher in the Rye', 'J.D. Salinger', 1951, 'Classic', '3.80', '2024-08-13 12:00:00', '2024-08-13 12:00:00'),
(5, 'Pride and Prejudice', 'Jane Austen', 1813, 'Romance', '4.25', '2024-08-13 12:00:00', '2024-08-13 12:00:00'),
(10, 'Book Updated', 'Put', 2011, 'Node', '5.45', '2024-08-13 15:47:40', '2024-08-13 15:58:11'),
(11, 'Update function', 'Put', 1975, 'Yeah', '1.45', '2024-08-13 15:53:02', '2024-08-13 15:58:51'),
(14, 'SELECT * FROM books WHERE author = \'\' OR \'1\'=\'1\'', 'TTX', 2013, 'Romance', '2.45', '2024-08-13 15:53:39', '2024-08-13 15:53:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_title_author_unique` (`title`,`author`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
