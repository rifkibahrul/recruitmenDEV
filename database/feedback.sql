-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 10:06 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `message`) VALUES
(13, 'Rasya', 'admin@example.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex autem et mollitia quis nostrum, est assumenda earum laudantium molestiae nesciunt officia commodi dignissimos voluptate deserunt, ea corrupti provident, officiis voluptatum exercitationem quam? Quo necessitatibus cumque saepe earum nulla doloribus consequuntur ut minima. Temporibus molestiae praesentium, quidem architecto rerum dicta!'),
(14, 'Aburizal', 'asdasdas@gmail.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus quaerat numquam, fugit explicabo nulla quos excepturi quam quis? Id, officiis!'),
(17, 'Syafiqul', 'admin@example.com', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, possimus!'),
(21, 'Amanah', 'admin@example.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel reprehenderit, quos nobis earum necessitatibus nisi numquam qui fugiat, provident quidem neque adipisci aut excepturi.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
