-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2026 at 07:42 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `name`, `email`, `email_verified_at`, `password`, `is_active`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'superadmin@example.com', NULL, '$2y$12$uQAr8drXhQ7fZm7Tp96tWuji7bMfTtPMJ4C51e9KkWnFfdYwuYHUG', 1, NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(2, 'Therese Lemke', 'bhickle@example.net', NULL, '$2y$12$Cuv58bKl7VfJ9gcbUqIZR.dFPpYp8Xr1u/qMVpE64jrP9vaUwpSmC', 1, NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(3, 'Rosalyn Towne Sr.', 'foster.shanahan@example.com', NULL, '$2y$12$L3WMP7YOfoS7Ep0bVe8yjuQB6FpJW66X/v.eatRWcvz3TjJFA44KC', 1, NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(4, 'Idella Hermann', 'helen70@example.com', NULL, '$2y$12$qzsKpUZQ3kswYnJwXCMxmOKunD38oB5j9iko.LPioIxeE0dgRnnye', 1, NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(5, 'Oma Beatty', 'lwatsica@example.org', NULL, '$2y$12$80z154l68gu42XhwC0o34O0ftLMdAIMl91cbUPK90lTxX6UOyWkqC', 1, NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(6, 'Ethel Bernhard MD', 'dan63@example.net', NULL, '$2y$12$BKByqp5bW2iaJzt2g.GgBunSzJT7o.ML21oSAQ4esM1GCqLQ1/Fpe', 1, NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58'),
(7, 'Trisha Blick', 'vincenza89@example.org', NULL, '$2y$12$lEnopM8FDJyg0mORU0IIuu3KCwEEqEAfkmpysdsBr4FZcfURMByA6', 1, NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58'),
(8, 'Dr. Gideon Schiller IV', 'rice.jadyn@example.org', NULL, '$2y$12$pxKqFfYrn0UWB.i.Oos98.V8lj950q.NoBC72BrI7DIomeD87REC2', 1, NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58'),
(9, 'Mr. Rasheed McCullough MD', 'trantow.clementina@example.com', NULL, '$2y$12$o1VG6F13qqZrVj5MKOfX8.sCdxFgmMHY3GOmHfJ8fR0v9GS8oLs1q', 1, NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58'),
(10, 'Miss Miracle Bechtelar V', 'abernier@example.org', NULL, '$2y$12$CG1aXFRiLKoA7oXK9nxc0eekwgjyLJOIS5sW7X2lNLhb.pLdOHt1e', 1, NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58'),
(11, 'Monty Lubowitz', 'joshua12@example.org', NULL, '$2y$12$uF7M7eqpQiITIEL5cZY0uuy3uqSnLOCouQ4R8WjzMxoTwxpFHcNjm', 1, NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59'),
(12, 'Hector Gutmann', 'trohan@example.net', NULL, '$2y$12$Wq7Cuc.lFtXa8ra33Tq6a.vCoaQCIszNj6TZpZMJc07lp44w45lTq', 1, NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59'),
(13, 'Osbaldo Mosciski', 'glen.wunsch@example.org', NULL, '$2y$12$cIltGUL3lCmrHLI2c.j8duoRZtOhz2UqI8PyK8DPQ2RwbuOn5nMdi', 1, NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59'),
(14, 'Sarina Dickens', 'koelpin.dessie@example.com', NULL, '$2y$12$aMbwh5M1yonUybP2H1H8AOwlqeXVGQdqMgMw96GKJLf16mHFvjcsa', 1, NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59'),
(15, 'Prof. Yoshiko Kertzmann Jr.', 'littel.neoma@example.net', NULL, '$2y$12$Y5w8GgPhuFHghc45rXMEbuWOWqAO5PVNJ8UrF5OgsjLcw8ERb0gC2', 1, NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59'),
(16, 'Miss Beth Barton Sr.', 'ahmad.wolff@example.net', NULL, '$2y$12$FHl4G0POpBy5Ag/d4N/tr.vrjsuP8kFI8iJZDxBY1tshAGUN/IpLO', 1, NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00'),
(17, 'Felicita Legros', 'billie.heaney@example.com', NULL, '$2y$12$Zc9piwj4q/fbyys2pTFhi.tid.RQKOzjLoUsU4NF5eZR8zI6aInWm', 1, NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00'),
(18, 'Lucy Cummings', 'dtremblay@example.net', NULL, '$2y$12$MVYQB9P6hLeHSx8zPah/7u6LpiXUI8JcqPEuCn/aCO7n8iB9bsuaG', 1, NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00'),
(19, 'Enoch Tromp', 'will.jordane@example.com', NULL, '$2y$12$lQSJwvs3m9bEBdUpmKHXXOqVwWYruvXUht2.eH6FNM3jYgldH2fru', 1, NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00'),
(20, 'Dr. Salma Schuppe', 'roberts.uriah@example.net', NULL, '$2y$12$zlECEiSe7UneA3JAvwYDQ.x7hmSET0cNieLlgoHl59NSZBtNhJsbe', 1, NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00'),
(21, 'Leo Homenick', 'mariam01@example.net', NULL, '$2y$12$gOR.cFhGzZXzvIwGTWE.7.MQM3lFs6rNQQoeDTUKbUSnqlp4.G2fy', 1, NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01'),
(22, 'Prof. Hollie Toy MD', 'evangeline58@example.net', NULL, '$2y$12$G09NNLvQRUIc.TJRV1fGS.0ZX/7q3cYID86c4q8Z5JZoEfBu1EDA2', 1, NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01'),
(23, 'Miss Bridgette Wisoky', 'kolson@example.net', NULL, '$2y$12$HrBjZ8ZSJ.HMDKCGnPQaS.0utn/r3jrlki6/aq5Cw7Maa5GIhHafO', 1, NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01'),
(24, 'Miss Eveline Konopelski DVM', 'dickens.clovis@example.net', NULL, '$2y$12$JQx8lFuy0dMZupvSj/4Zs.28X3heIvKqbnLemm6TflTw8OUR4TBoa', 1, NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01'),
(25, 'Willow Dietrich', 'monte96@example.com', NULL, '$2y$12$wVR1I2ocVQoXVk9Ngv/cfOx8CDybpmyl4vqBwf3BZCVgPKJphGVku', 1, NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01'),
(26, 'Creola Doyle', 'spinka.terence@example.org', NULL, '$2y$12$aTg41QKEP9hpccwGg.JRMuX3sG6EnuBqiBcR411R8QFqcgyrAz3nC', 1, NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02'),
(27, 'Malika Murray', 'afahey@example.com', NULL, '$2y$12$WdLyOESGziVd56lwBzmbH.YINy9zuiQ6JMrBgn2wJ8CI1u/qU6Ox.', 1, NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02'),
(28, 'Reed Sipes IV', 'zmckenzie@example.net', NULL, '$2y$12$EqZ2L.wZn/O3R1zGM.I6qu.NOFK699nN0jAItBcoIW300SV/B.Exi', 1, NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02'),
(29, 'Prof. Rosalyn Roberts', 'aubrey24@example.org', NULL, '$2y$12$3Sr2e6rizR087N7iI/1C4e00Zdxj7PiOT21U6YWuAoRzd7b7Cmoxi', 1, NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02'),
(30, 'Adan Rau', 'harold70@example.com', NULL, '$2y$12$5GCujNPG6KPL9PfTB9sqZOl7k9FWibFRZpEUh8VuRPD1hSpofAR1S', 1, NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02'),
(31, 'Sandy Cremin', 'margie33@example.org', NULL, '$2y$12$/CQYBKTGNH7Akk39BMs.FO.Ok/kMQk9PTyg2hSF1glCDAldzsiv6a', 1, NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03'),
(32, 'Rosalia Roob', 'darlene.moore@example.net', NULL, '$2y$12$UlOabFS6o.Ufuwxjf.auZOJWhXsE3NoMktI1yIrdJlijf3Ig3AL2.', 1, NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03'),
(33, 'Abdul Kuhic', 'xfriesen@example.com', NULL, '$2y$12$afR.tvAEjPURVcexdBji7eTUWpore6379xBVz/b4OfsN27pw66xV.', 1, NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03'),
(34, 'Ms. Anahi Jast', 'maybell97@example.net', NULL, '$2y$12$CAbOT6fKDxIGlAOYsgMhxeA38ivpJfzr5ytA4Dar5gQKkSaSxPil.', 1, NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03'),
(35, 'Murphy Cassin II', 'zgutkowski@example.org', NULL, '$2y$12$0F.C4KKXG7.2/X.ad5Gb1uwKKE1bvMz24wL/6JShDiLu/NFS9SUyG', 1, NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03'),
(36, 'Afton Nienow DDS', 'stanford.sanford@example.com', NULL, '$2y$12$69pKpUZcjYkxHn8FHQTYcegHVbvAZGxL8IiHTPnHrwmhO3QOw4fvG', 1, NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04'),
(37, 'Nella Mills', 'witting.emerald@example.net', NULL, '$2y$12$KNHuDGCAMfzfJ77PNjXJK.nI/w8gbB9Z.5RPzxvlNiDRMSsg6C/Iy', 1, NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04'),
(38, 'Waylon Glover', 'nrohan@example.org', NULL, '$2y$12$0CEu.ll9rJHl2mJ2IrRuFe1ShkjkIEDTCSijdyzQredu0BED4FU.2', 1, NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04'),
(39, 'Prof. Reina Lang', 'rvonrueden@example.com', NULL, '$2y$12$r3f/UoG8rndR39DjZVXCxutvXk.tN.nh3GT15xiMANjGSBAUr6sOe', 1, NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04'),
(40, 'Jadon Ankunding DVM', 'mertie36@example.org', NULL, '$2y$12$ucAOPqbWGF235doZ6zfi7e4ijPoJoYywnpGjENj9UehxkFj.Two66', 1, NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04'),
(41, 'Laura McClure', 'kelly22@example.org', NULL, '$2y$12$YiPZoAFNhwLHlyB.fXORFu/BnPOIdm2ihhH9RSXBHfd5w.5ms/Qwy', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(42, 'Aileen Balistreri', 'kaci20@example.org', NULL, '$2y$12$QU924gIHhCGwYkq9DI8J7O5oQzwefekkOZ.r.fVLgKr5U3rSHM/Gu', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(43, 'Peyton Feeney', 'mozelle.pfannerstill@example.net', NULL, '$2y$12$WV2xZHrz0gSqYQcCNcBCju6jgfUksejYQ.mV1WKT99OsYW8NAjgdK', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(44, 'Dr. Eula Reinger', 'bins.jazmyne@example.org', NULL, '$2y$12$oeRBF.XKTKYcdhddEK.2/OSt20tnaYjstFQ8Ng/EAJduolcre8zg2', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(45, 'Cyril Larson DVM', 'qwest@example.net', NULL, '$2y$12$rrFsCo00bxzRl1eJ13Gy8.xSlri6U4bhj6AqF46bSJ9//9M18RSgy', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(46, 'Finn Oberbrunner Sr.', 'wweber@example.com', NULL, '$2y$12$6I9aEHbHR6lUGihePkggpufd85/cgnP/QQtJlUg.yOsmXeQq1y.06', 1, NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05'),
(47, 'Molly Towne', 'zhodkiewicz@example.org', NULL, '$2y$12$FPnDHz4T5ah5KV8aw1xFz.TMSUYx6VrRNUgfbGdaTaS6Yqoxg1GZK', 1, NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06'),
(48, 'Rosemary Hyatt', 'rolfson.jalyn@example.net', NULL, '$2y$12$uQqsCl8EdpNCf6JpktwCvuBlzDGpYjYndeDJA7G4Ne1oZLz0LFmiW', 1, NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06'),
(49, 'Mathew Powlowski', 'pietro.williamson@example.org', NULL, '$2y$12$34NN58/7QEqzzO/ltMRqsOTOJl2DMZA8qPMNAwCJf5a8rVRBUt44i', 1, NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06'),
(50, 'Ms. Kristina Upton MD', 'benton.littel@example.net', NULL, '$2y$12$4hJVLSl5EYj0iNQQvo6xlOf63aU1xRB.U5jZaqt4ApvU0uso8Tit2', 1, NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06'),
(51, 'Tyrique Dietrich', 'cortney95@example.com', NULL, '$2y$12$o7cqTqMwWbScampgTwPjhe101Y6dJKCUiNKJV9Uzyhi8W.p3vsgui', 1, NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06'),
(52, 'Alexandria Wyman', 'littel.elinor@example.net', NULL, '$2y$12$Z6V9.OwyAjzJ05ugL8sOgOIir6OP5/zFFewW47uHghBFcdDd0vlHe', 1, NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07'),
(53, 'Hardy Shields', 'herman.corbin@example.net', NULL, '$2y$12$2SNwoIFDnp5bY8W0kGRnIu1UvzGcL9CaixNiF5kN8aq69NQXp.oNW', 1, NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07'),
(54, 'Mr. Ryan Corwin Sr.', 'gordon.walter@example.net', NULL, '$2y$12$xKcwGRa.USZANKTu/jN3iO69PcPTGeyKyL2zyW.a1sTjoX4vaQA4i', 1, NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07'),
(55, 'Royce Jerde', 'tspinka@example.org', NULL, '$2y$12$amw8ssOfaP0CSSCdaeAEneWY7GFspIuyqV90O3ytMe70jz4TOREBS', 1, NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07'),
(56, 'Miss Monique Trantow DDS', 'gaston99@example.org', NULL, '$2y$12$wR3QFSLigYEMmyH4YxIKdOsF2u7Nxx/7JQzYF2tgRsNh0KO4hfDDq', 1, NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07'),
(57, 'Nyasia Nitzsche', 'richie.halvorson@example.net', NULL, '$2y$12$6cVPVEG8ecAWtT6XIBwvnOvqWGuXgGjKqW5cGjIKEuzhOu.L0kpWO', 1, NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08'),
(58, 'Dr. Giovanna Grant', 'aurelie32@example.com', NULL, '$2y$12$kvR/8y0RkftKKPX8aCB00O9cH6bRo.3ToItsDtbBDP4Dnlg7urhLq', 1, NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08'),
(59, 'Ewald Hauck PhD', 'carter.jed@example.net', NULL, '$2y$12$RigWs2Hzg0e218TSAjOiBObNKapiP4g1swfQxdgJqmTL4460rSVQ.', 1, NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08'),
(60, 'Maritza Moen', 'loyce.kris@example.org', NULL, '$2y$12$XqeQx7p.bfRGSdlC0gkgcOa5LRDDEF.pPgPoZSuno6BtseNFIaZK.', 1, NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08'),
(61, 'Viviane Hane', 'satterfield.bobby@example.org', NULL, '$2y$12$LaVKS.Q6QbM3487Gp72VH.lrT0LWjgxv6NJ6H442QUwNb643fVoke', 1, NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08'),
(62, 'Stevie Schowalter', 'norene.corkery@example.org', NULL, '$2y$12$i1Q1pNUJRHUoa4ve2ss3DeaknrPWCeMppko1uO1bqojaz/DVsPfLm', 1, NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09'),
(63, 'Ms. Golda Raynor IV', 'plarson@example.com', NULL, '$2y$12$MFg4iHEVFs.iGrjb3gfhBO1Bw.qQhc9TKIkdrXKeEInf9Rph8HDlu', 1, NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09'),
(64, 'Carey Raynor', 'renner.griffin@example.com', NULL, '$2y$12$sgHEjp0fffYF6mkg4oekfeoZw5PIdRbvTnZtDKiepSGhcfy2brFqS', 1, NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09'),
(65, 'Gillian Schoen', 'oullrich@example.com', NULL, '$2y$12$gcDtYXonCSv6JeN7BR2wk.dwIOV9zIlEKQUi1bfzuUGqceysPM0fW', 1, NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09'),
(66, 'Rashawn Lowe Jr.', 'dandre.bins@example.net', NULL, '$2y$12$pkb05nVlHmbEKGV.3XE.zuz3R6CZWvWO6itHSa1/ZNspN4SkdcWKu', 1, NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09'),
(67, 'Rosalee White', 'smoen@example.com', NULL, '$2y$12$sCS.tsDqHz8LiyGucUVYlecgv6wpKgyX09stkuS8xhCxPq1fQZlhK', 1, NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10'),
(68, 'Arturo Donnelly MD', 'estell.schroeder@example.net', NULL, '$2y$12$iLKRa58.ssxt6iNw3BDsDehO8CYSEvwutN/WdLj1dWC3UPyl.YHt.', 1, NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10'),
(69, 'Mr. Clemens Rohan V', 'sebastian07@example.com', NULL, '$2y$12$3X8SVkSXhj7GpXRiEgy9dugf1XegrZp0CGBfx7w6vPDh/MkM/67eq', 1, NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10'),
(70, 'Zakary Heathcote', 'margret53@example.com', NULL, '$2y$12$12VzlCdyC/RqnbPyzIpfrOLYVQrGLihV1GA8mtY2Wdcah./pJR9Uq', 1, NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10'),
(71, 'Silas Becker', 'daisy.harber@example.net', NULL, '$2y$12$odD5pMrDWM4qXbyX1Bdm6OFdi3H72F2BYC/khrEnpEIWrjpyi0gGe', 1, NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10'),
(72, 'Juliet Fahey', 'jeramy72@example.com', NULL, '$2y$12$PjpudB4FYJv1MvOmx/7cVuxD9SNr/Y.F53qOGXecDFMbxtLt8HNK.', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(73, 'Kristin Pouros', 'schowalter.harvey@example.org', NULL, '$2y$12$470UQeyO/h5m1IRZD70/kOoKWxMXG7GObdx8mJ57POXQr3n2d5uYi', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(74, 'Mr. Lee Zieme III', 'kiley06@example.org', NULL, '$2y$12$dxB2KhlLCncv5RQPULzNI..pSLjuXQHTvwlZp4kMHUuFkhjpuRWjq', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(75, 'Elsie McGlynn DVM', 'bailey.laury@example.net', NULL, '$2y$12$tz6bWFxxL6LSemflx6A9T.AYbOZmcJyP8TMpEOCUYT.jNK0.xXj16', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(76, 'Ms. Brandyn DuBuque', 'enrico18@example.com', NULL, '$2y$12$clBxlo.kQwIB3DdyHPdnHOhH2.2mDKzVy0QQ4AlBq9Fdr44spxr5e', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(77, 'Dr. Stewart Aufderhar MD', 'chirthe@example.net', NULL, '$2y$12$rwYi9.zsbatXMUmYabuaa.0pvqTeNqc5HDQhNgiLvWhNIzTyrWuOq', 1, NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11'),
(78, 'Cade Schuppe', 'clesch@example.org', NULL, '$2y$12$p9jQHW/1ReCO9/R1lT8UbubQuC9W9DQcvS4yLhBCMsQUffRG1PZFS', 1, NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12'),
(79, 'Hillary Lemke', 'lance.abshire@example.com', NULL, '$2y$12$C0m36kkxxz./UM6uPWHIXecoNTymO8TA8Y5IrpntWJf7yYsCjzGSm', 1, NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12'),
(80, 'Brenda Nolan', 'tmarks@example.net', NULL, '$2y$12$94M3pU93V81IgcaUtaapUe/nGsthpMP2QAlg01uMraYrOrBGaD.US', 1, NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12'),
(81, 'Amparo Cassin', 'hyatt.tiana@example.org', NULL, '$2y$12$TYT6P4LK/VPKArXcotAvMeH0Hw.b/OSvOYjwITeqokMvlty0ljKSC', 1, NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12'),
(82, 'Buster Nienow', 'hrowe@example.org', NULL, '$2y$12$g7MQlbgCuYpp9l6L4GBsBeUyZM/eilJubmNeggp0N4fvWhTJ2tmvC', 1, NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12'),
(83, 'Abe Pagac', 'mzboncak@example.com', NULL, '$2y$12$amchd4iF7qQJfLG20jcUJ.4W0kqSpuAtbD7BoIviTtit1pdGpw9sm', 1, NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13'),
(84, 'Jessyca Turcotte', 'kailey.price@example.net', NULL, '$2y$12$aY5C0/mhjDc8IvIO7bsPBOpWAm/HFVkQQD1t7KwFo9B2Lrtc1fjxG', 1, NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13'),
(85, 'Desiree Monahan III', 'jblock@example.net', NULL, '$2y$12$zGgkeD9j1ZZmCzgyek9syuwtVTCzaE0pCdkFGM2rIvJPv2oBfA6dK', 1, NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13'),
(86, 'Brenden Homenick', 'julien13@example.net', NULL, '$2y$12$e45X4FbH49eq/ihudZDjU.m5VOefZc2xcHruaPn4r84jwWlpkYBJm', 1, NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13'),
(87, 'Kari Wilderman', 'elena81@example.net', NULL, '$2y$12$nchDR9.i0ydY5u0p/n7pIeE5BbZsT/xY2duafGofPr5uB651.2tlu', 1, NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13'),
(88, 'Ms. Cortney Watsica V', 'abe92@example.net', NULL, '$2y$12$yrfGhfM9IJUXN8SlUQ8IGOS8kwj23A6FNHZ968I6K/9PlOsbUu2Ri', 1, NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14'),
(89, 'Mr. Oswaldo Ankunding', 'araceli33@example.net', NULL, '$2y$12$lpAst4Ob/nIcb4Eu4yi.COlfH6Uwe65vXZ9c2ho1GWbjRY1BpQb7O', 1, NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14'),
(90, 'Elnora West', 'modesta.toy@example.org', NULL, '$2y$12$C4AaSpvKw5UOg7ob4nFjTOrIWmyuTlhxMnqb47SwJpzMDcxDkoHVi', 1, NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14'),
(91, 'Alec Gerlach', 'muller.eve@example.net', NULL, '$2y$12$AyqKeJBzRmSVziA09Odnf.zkfU9xkwi.fCrE4ksWYed9jZbtShuW.', 1, NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14'),
(92, 'Madalyn Kulas', 'jstiedemann@example.org', NULL, '$2y$12$7PYYx3Z0N5A1CGn.uhMEp.rUpwfrxQ5R5q3EpnT5z1GmJYMiHO1sO', 1, NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14'),
(93, 'Lenore Shields', 'emmie.huels@example.org', NULL, '$2y$12$fNrR04xxbr2h3j8ozUDNJ.586sTigmHdnatF/6eLf92V31BjuZ8yO', 1, NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15'),
(94, 'Prof. Cathy Runolfsdottir DDS', 'fmurray@example.net', NULL, '$2y$12$yUYctxeN5KFHaIHomJV60efWVrnhBUH4lPdSQsG4NUqmGVzvd/Z5q', 1, NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15'),
(95, 'Kiel Terry', 'hmarquardt@example.org', NULL, '$2y$12$aWr03I2lSnedkfkLkUMUs.A5.aBErUSDitjjrRYqD.aImylbayM9q', 1, NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15'),
(96, 'Virginia Marks', 'hermiston.lorna@example.net', NULL, '$2y$12$tgo0YMFAMxbV82QGxqGzSuEcWZ4qBU5pPE/m305LaDpHTWojIiQrq', 1, NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15'),
(97, 'Marjorie Predovic', 'daugherty.hettie@example.com', NULL, '$2y$12$Iarv6mx9wtZC0qDwBOEpyeszxgP9W2uFYgPkMuEXpw.wYMiOGfO6e', 1, NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15'),
(98, 'Arlie Spencer', 'cloyd.christiansen@example.com', NULL, '$2y$12$zebbkNptPKzEjbb/2imEw.HCDPmzE2/Ft01BAIuuYMtW6pbERKh9S', 1, NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(99, 'Anabelle Kris', 'noemy80@example.com', NULL, '$2y$12$OyYZZfM.97Aj.BhjSVpdUeDH7uZZHLYTL3OJK9ICPsQu911Tutt42', 1, NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(100, 'Ms. Samanta O\'Connell MD', 'kautzer.andres@example.org', NULL, '$2y$12$FTNQurEPMyufl6UEJripIe/hkX.9Bpi1MEDC0igKbhCs8NbkMRjqS', 1, NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(101, 'Priscilla Williamson', 'wilkinson.carolyn@example.org', NULL, '$2y$12$z4tVJeE/frwp.mC.j6gD7uYo9f9aTVe62C/t/qY42MlHYi3ClMMoy', 1, NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('clock_in','clock_out') NOT NULL,
  `timestamp` datetime NOT NULL,
  `latitude` decimal(10,6) NOT NULL,
  `longitude` decimal(10,6) NOT NULL,
  `photo_path` varchar(255) NOT NULL,
  `is_late` tinyint(1) NOT NULL DEFAULT 0,
  `status` enum('approved','rejected','auto') NOT NULL DEFAULT 'approved',
  `irregular_clockout` tinyint(1) NOT NULL DEFAULT 0,
  `reviewed_by` bigint(20) UNSIGNED DEFAULT NULL,
  `reviewed_at` datetime DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attendance_reasons`
--

CREATE TABLE `attendance_reasons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attendance_id` bigint(20) UNSIGNED NOT NULL,
  `reason_type` enum('late','early_clockout','auto_clockout') NOT NULL,
  `description` text DEFAULT NULL,
  `photo_path` text DEFAULT NULL,
  `review_status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `reviewed_by` bigint(20) UNSIGNED DEFAULT NULL,
  `reviewed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `base_salaries`
--

CREATE TABLE `base_salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `base_salary` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `base_salaries`
--

INSERT INTO `base_salaries` (`id`, `user_id`, `base_salary`, `created_at`, `updated_at`) VALUES
(1, 1, 13000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 2, 6700000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 3, 8800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 4, 7000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 5, 7000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 6, 8200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 7, 7800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(8, 8, 14700000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(9, 9, 8300000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(10, 10, 9000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(11, 11, 5600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(12, 12, 7800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(13, 13, 9000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(14, 14, 6400000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(15, 15, 5300000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(16, 16, 6200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(17, 17, 6900000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(18, 18, 8500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(19, 19, 14800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(20, 20, 11100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(21, 21, 12200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(22, 22, 5000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(23, 23, 7000000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(24, 24, 11400000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(25, 25, 14900000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(26, 26, 8700000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(27, 27, 6100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(28, 28, 5400000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(29, 29, 5900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(30, 30, 7500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(31, 31, 10500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(32, 32, 8700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(33, 33, 11000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(34, 34, 14700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(35, 35, 13000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(36, 36, 10800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(37, 37, 5700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(38, 38, 13500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(39, 39, 5800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(40, 40, 9000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(41, 41, 8800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(42, 42, 14700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(43, 43, 5700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(44, 44, 5900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(45, 45, 10300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(46, 46, 10000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(47, 47, 15000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(48, 48, 12300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(49, 49, 10000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(50, 50, 6200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(51, 51, 5900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(52, 52, 10300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(53, 53, 12000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(54, 54, 7900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(55, 55, 6300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(56, 56, 14900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(57, 57, 14400000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(58, 58, 5000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(59, 59, 6200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(60, 60, 8100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(61, 61, 10200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(62, 62, 8700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(63, 63, 8300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(64, 64, 8700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(65, 65, 12100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(66, 66, 5000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(67, 67, 13000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(68, 68, 7900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(69, 69, 13600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(70, 70, 12900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(71, 71, 8600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(72, 72, 9100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(73, 73, 14900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(74, 74, 14100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(75, 75, 14700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(76, 76, 5000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(77, 77, 9000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(78, 78, 15000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(79, 79, 6400000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(80, 80, 8700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(81, 81, 11100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(82, 82, 5300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(83, 83, 13200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(84, 84, 6700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(85, 85, 9100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(86, 86, 9900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(87, 87, 6500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(88, 88, 15000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(89, 89, 8900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(90, 90, 11600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(91, 91, 13200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(92, 92, 14300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(93, 93, 7000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(94, 94, 6900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(95, 95, 5500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(96, 96, 13900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(97, 97, 8900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(98, 98, 13900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(99, 99, 12900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(100, 100, 8900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(101, 101, 10100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-global:cache:index', 'a:1:{i:0;s:21:\"permission:endpoint:1\";}', 2083198585),
('laravel-cache-permission:endpoint:1', 'a:118:{i:0;s:12:\"account:view\";i:1;s:14:\"account:create\";i:2;s:12:\"account:show\";i:3;s:12:\"account:edit\";i:4;s:14:\"account:delete\";i:5;s:19:\"account:assign_role\";i:6;s:21:\"account:unassign_role\";i:7;s:25:\"account:assign_permission\";i:8;s:27:\"account:unassign_permission\";i:9;s:9:\"role:view\";i:10;s:11:\"role:create\";i:11;s:14:\"role:bulk-edit\";i:12;s:16:\"role:bulk-delete\";i:13;s:9:\"role:show\";i:14;s:9:\"role:edit\";i:15;s:11:\"role:delete\";i:16;s:13:\"division:view\";i:17;s:15:\"division:create\";i:18;s:13:\"division:show\";i:19;s:13:\"division:edit\";i:20;s:15:\"division:delete\";i:21;s:9:\"team:view\";i:22;s:11:\"team:create\";i:23;s:9:\"team:show\";i:24;s:9:\"team:edit\";i:25;s:11:\"team:delete\";i:26;s:9:\"user:view\";i:27;s:11:\"user:create\";i:28;s:9:\"user:show\";i:29;s:9:\"user:edit\";i:30;s:11:\"user:delete\";i:31;s:16:\"base-salary:view\";i:32;s:18:\"base-salary:create\";i:33;s:16:\"base-salary:edit\";i:34;s:18:\"base-salary:delete\";i:35;s:11:\"salary:view\";i:36;s:13:\"salary:create\";i:37;s:13:\"salary:report\";i:38;s:11:\"salary:show\";i:39;s:11:\"salary:edit\";i:40;s:13:\"salary:delete\";i:41;s:15:\"salary:finalize\";i:42;s:15:\"salary:download\";i:43;s:18:\"salary-item:create\";i:44;s:18:\"salary-item:delete\";i:45;s:15:\"attendance:view\";i:46;s:19:\"attendance:clock_in\";i:47;s:20:\"attendance:clock_out\";i:48;s:15:\"attendance:show\";i:49;s:17:\"attendance:delete\";i:50;s:17:\"attendance:review\";i:51;s:21:\"attendance:view_photo\";i:52;s:24:\"attendance_reason:create\";i:53;s:22:\"attendance_reason:edit\";i:54;s:22:\"attendance_reason:view\";i:55;s:24:\"attendance_reason:review\";i:56;s:10:\"leave:view\";i:57;s:12:\"leave:create\";i:58;s:13:\"leave:preview\";i:59;s:13:\"leave:summary\";i:60;s:15:\"leave-type:view\";i:61;s:23:\"leave-type:with-balance\";i:62;s:26:\"leave-type:without-balance\";i:63;s:17:\"leave-type:create\";i:64;s:15:\"leave-type:show\";i:65;s:15:\"leave-type:edit\";i:66;s:17:\"leave-type:delete\";i:67;s:18:\"leave-balance:view\";i:68;s:20:\"leave-balance:create\";i:69;s:18:\"leave-balance:show\";i:70;s:18:\"leave-balance:edit\";i:71;s:20:\"leave-balance:delete\";i:72;s:10:\"leave:show\";i:73;s:12:\"leave:cancel\";i:74;s:13:\"leave:approve\";i:75;s:12:\"leave:reject\";i:76;s:10:\"leave:edit\";i:77;s:12:\"leave:delete\";i:78;s:10:\"shift:view\";i:79;s:12:\"shift:create\";i:80;s:13:\"shift:view-my\";i:81;s:21:\"shift:view-unassigned\";i:82;s:19:\"shift:bulk-unassign\";i:83;s:13:\"overtime:view\";i:84;s:15:\"overtime:create\";i:85;s:16:\"overtime:approve\";i:86;s:15:\"overtime:reject\";i:87;s:13:\"overtime:edit\";i:88;s:15:\"overtime:delete\";i:89;s:10:\"shift:show\";i:90;s:10:\"shift:edit\";i:91;s:12:\"shift:delete\";i:92;s:19:\"shift:view-assigned\";i:93;s:18:\"shift:view-summary\";i:94;s:17:\"shift:bulk-assign\";i:95;s:12:\"shift:assign\";i:96;s:14:\"shift:unassign\";i:97;s:12:\"shift:change\";i:98;s:17:\"working-days:view\";i:99;s:20:\"working-days:view-my\";i:100;s:19:\"working-days:create\";i:101;s:24:\"working-days:bulk-assign\";i:102;s:17:\"working-days:show\";i:103;s:17:\"working-days:edit\";i:104;s:19:\"working-days:delete\";i:105;s:19:\"working-days:assign\";i:106;s:21:\"working-days:unassign\";i:107;s:13:\"document:view\";i:108;s:15:\"document:create\";i:109;s:18:\"document-type:view\";i:110;s:20:\"document-type:create\";i:111;s:18:\"document-type:show\";i:112;s:18:\"document-type:edit\";i:113;s:20:\"document-type:delete\";i:114;s:13:\"document:show\";i:115;s:13:\"document:edit\";i:116;s:15:\"document:delete\";i:117;s:17:\"document:download\";}', 1768379477);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-spatie.permission.cache', 'a:3:{s:5:\"alias\";a:4:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:372:{i:0;a:4:{s:1:\"a\";i:1;s:1:\"b\";s:17:\"account.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:1;a:4:{s:1:\"a\";i:2;s:1:\"b\";s:18:\"account.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:2;a:4:{s:1:\"a\";i:3;s:1:\"b\";s:18:\"account.email:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:3;a:4:{s:1:\"a\";i:4;s:1:\"b\";s:19:\"account.email:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:4;a:4:{s:1:\"a\";i:5;s:1:\"b\";s:21:\"account.password:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:5;a:4:{s:1:\"a\";i:6;s:1:\"b\";s:22:\"account.password:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:6;a:4:{s:1:\"a\";i:7;s:1:\"b\";s:22:\"account.is_active:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:7;a:4:{s:1:\"a\";i:8;s:1:\"b\";s:23:\"account.is_active:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:8;a:4:{s:1:\"a\";i:9;s:1:\"b\";s:30:\"account.email_verified_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:9;a:4:{s:1:\"a\";i:10;s:1:\"b\";s:31:\"account.email_verified_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:10;a:4:{s:1:\"a\";i:11;s:1:\"b\";s:23:\"attendance.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:11;a:4:{s:1:\"a\";i:12;s:1:\"b\";s:24:\"attendance.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:12;a:4:{s:1:\"a\";i:13;s:1:\"b\";s:20:\"attendance.type:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:13;a:4:{s:1:\"a\";i:14;s:1:\"b\";s:21:\"attendance.type:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:14;a:4:{s:1:\"a\";i:15;s:1:\"b\";s:25:\"attendance.timestamp:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:15;a:4:{s:1:\"a\";i:16;s:1:\"b\";s:26:\"attendance.timestamp:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:16;a:4:{s:1:\"a\";i:17;s:1:\"b\";s:24:\"attendance.latitude:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:17;a:4:{s:1:\"a\";i:18;s:1:\"b\";s:25:\"attendance.latitude:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:18;a:4:{s:1:\"a\";i:19;s:1:\"b\";s:25:\"attendance.longitude:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:19;a:4:{s:1:\"a\";i:20;s:1:\"b\";s:26:\"attendance.longitude:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:20;a:4:{s:1:\"a\";i:21;s:1:\"b\";s:26:\"attendance.photo_path:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:21;a:4:{s:1:\"a\";i:22;s:1:\"b\";s:27:\"attendance.photo_path:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:22;a:4:{s:1:\"a\";i:23;s:1:\"b\";s:23:\"attendance.is_late:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:23;a:4:{s:1:\"a\";i:24;s:1:\"b\";s:24:\"attendance.is_late:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:24;a:4:{s:1:\"a\";i:25;s:1:\"b\";s:22:\"attendance.status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:25;a:4:{s:1:\"a\";i:26;s:1:\"b\";s:23:\"attendance.status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:26;a:4:{s:1:\"a\";i:27;s:1:\"b\";s:34:\"attendance.irregular_clockout:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:27;a:4:{s:1:\"a\";i:28;s:1:\"b\";s:35:\"attendance.irregular_clockout:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:28;a:4:{s:1:\"a\";i:29;s:1:\"b\";s:27:\"attendance.reviewed_by:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:29;a:4:{s:1:\"a\";i:30;s:1:\"b\";s:28:\"attendance.reviewed_by:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:30;a:4:{s:1:\"a\";i:31;s:1:\"b\";s:27:\"attendance.reviewed_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:31;a:4:{s:1:\"a\";i:32;s:1:\"b\";s:28:\"attendance.reviewed_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:32;a:4:{s:1:\"a\";i:33;s:1:\"b\";s:22:\"attendance.reason:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:33;a:4:{s:1:\"a\";i:34;s:1:\"b\";s:23:\"attendance.reason:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:34;a:4:{s:1:\"a\";i:35;s:1:\"b\";s:36:\"attendance_reason.attendance_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:35;a:4:{s:1:\"a\";i:36;s:1:\"b\";s:37:\"attendance_reason.attendance_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:36;a:4:{s:1:\"a\";i:37;s:1:\"b\";s:34:\"attendance_reason.reason_type:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:37;a:4:{s:1:\"a\";i:38;s:1:\"b\";s:35:\"attendance_reason.reason_type:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:38;a:4:{s:1:\"a\";i:39;s:1:\"b\";s:34:\"attendance_reason.description:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:39;a:4:{s:1:\"a\";i:40;s:1:\"b\";s:35:\"attendance_reason.description:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:40;a:4:{s:1:\"a\";i:41;s:1:\"b\";s:33:\"attendance_reason.photo_path:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:41;a:4:{s:1:\"a\";i:42;s:1:\"b\";s:34:\"attendance_reason.photo_path:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:42;a:4:{s:1:\"a\";i:43;s:1:\"b\";s:36:\"attendance_reason.review_status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:43;a:4:{s:1:\"a\";i:44;s:1:\"b\";s:37:\"attendance_reason.review_status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:44;a:4:{s:1:\"a\";i:45;s:1:\"b\";s:34:\"attendance_reason.reviewed_by:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:45;a:4:{s:1:\"a\";i:46;s:1:\"b\";s:35:\"attendance_reason.reviewed_by:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:46;a:4:{s:1:\"a\";i:47;s:1:\"b\";s:34:\"attendance_reason.reviewed_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:47;a:4:{s:1:\"a\";i:48;s:1:\"b\";s:35:\"attendance_reason.reviewed_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:48;a:4:{s:1:\"a\";i:49;s:1:\"b\";s:24:\"base_salary.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:49;a:4:{s:1:\"a\";i:50;s:1:\"b\";s:25:\"base_salary.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:50;a:4:{s:1:\"a\";i:51;s:1:\"b\";s:28:\"base_salary.base_salary:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:51;a:4:{s:1:\"a\";i:52;s:1:\"b\";s:29:\"base_salary.base_salary:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:52;a:4:{s:1:\"a\";i:53;s:1:\"b\";s:18:\"division.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:53;a:4:{s:1:\"a\";i:54;s:1:\"b\";s:19:\"division.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:54;a:4:{s:1:\"a\";i:55;s:1:\"b\";s:21:\"division.head_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:55;a:4:{s:1:\"a\";i:56;s:1:\"b\";s:22:\"division.head_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:56;a:4:{s:1:\"a\";i:57;s:1:\"b\";s:21:\"document.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:57;a:4:{s:1:\"a\";i:58;s:1:\"b\";s:22:\"document.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:58;a:4:{s:1:\"a\";i:59;s:1:\"b\";s:30:\"document.document_type_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:59;a:4:{s:1:\"a\";i:60;s:1:\"b\";s:31:\"document.document_type_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:60;a:4:{s:1:\"a\";i:61;s:1:\"b\";s:29:\"document.document_number:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:61;a:4:{s:1:\"a\";i:62;s:1:\"b\";s:30:\"document.document_number:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:62;a:4:{s:1:\"a\";i:63;s:1:\"b\";s:23:\"document.file_path:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:63;a:4:{s:1:\"a\";i:64;s:1:\"b\";s:24:\"document.file_path:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:64;a:4:{s:1:\"a\";i:65;s:1:\"b\";s:23:\"document.issued_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:65;a:4:{s:1:\"a\";i:66;s:1:\"b\";s:24:\"document.issued_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:66;a:4:{s:1:\"a\";i:67;s:1:\"b\";s:24:\"document.expired_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:67;a:4:{s:1:\"a\";i:68;s:1:\"b\";s:25:\"document.expired_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:68;a:4:{s:1:\"a\";i:69;s:1:\"b\";s:18:\"document.meta:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:69;a:4:{s:1:\"a\";i:70;s:1:\"b\";s:19:\"document.meta:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:70;a:4:{s:1:\"a\";i:71;s:1:\"b\";s:23:\"document_type.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:71;a:4:{s:1:\"a\";i:72;s:1:\"b\";s:24:\"document_type.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:72;a:4:{s:1:\"a\";i:73;s:1:\"b\";s:27:\"document_type.category:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:73;a:4:{s:1:\"a\";i:74;s:1:\"b\";s:28:\"document_type.category:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:74;a:4:{s:1:\"a\";i:75;s:1:\"b\";s:27:\"document_type.required:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:75;a:4:{s:1:\"a\";i:76;s:1:\"b\";s:28:\"document_type.required:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:76;a:4:{s:1:\"a\";i:77;s:1:\"b\";s:26:\"document_type.expires:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:77;a:4:{s:1:\"a\";i:78;s:1:\"b\";s:27:\"document_type.expires:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:78;a:4:{s:1:\"a\";i:79;s:1:\"b\";s:29:\"document_type.has_number:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:79;a:4:{s:1:\"a\";i:80;s:1:\"b\";s:30:\"document_type.has_number:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:80;a:4:{s:1:\"a\";i:81;s:1:\"b\";s:27:\"document_type.has_file:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:81;a:4:{s:1:\"a\";i:82;s:1:\"b\";s:28:\"document_type.has_file:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:82;a:4:{s:1:\"a\";i:83;s:1:\"b\";s:30:\"document_type.meta_schema:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:83;a:4:{s:1:\"a\";i:84;s:1:\"b\";s:31:\"document_type.meta_schema:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:84;a:4:{s:1:\"a\";i:85;s:1:\"b\";s:17:\"holiday.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:85;a:4:{s:1:\"a\";i:86;s:1:\"b\";s:18:\"holiday.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:86;a:4:{s:1:\"a\";i:87;s:1:\"b\";s:17:\"holiday.date:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:87;a:4:{s:1:\"a\";i:88;s:1:\"b\";s:18:\"holiday.date:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:88;a:4:{s:1:\"a\";i:89;s:1:\"b\";s:25:\"holiday.is_recurring:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:89;a:4:{s:1:\"a\";i:90;s:1:\"b\";s:26:\"holiday.is_recurring:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:90;a:4:{s:1:\"a\";i:91;s:1:\"b\";s:24:\"holiday.description:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:91;a:4:{s:1:\"a\";i:92;s:1:\"b\";s:25:\"holiday.description:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:92;a:4:{s:1:\"a\";i:93;s:1:\"b\";s:18:\"leave.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:93;a:4:{s:1:\"a\";i:94;s:1:\"b\";s:19:\"leave.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:94;a:4:{s:1:\"a\";i:95;s:1:\"b\";s:24:\"leave.leave_type_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:95;a:4:{s:1:\"a\";i:96;s:1:\"b\";s:25:\"leave.leave_type_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:96;a:4:{s:1:\"a\";i:97;s:1:\"b\";s:22:\"leave.leave_title:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:97;a:4:{s:1:\"a\";i:98;s:1:\"b\";s:23:\"leave.leave_title:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:98;a:4:{s:1:\"a\";i:99;s:1:\"b\";s:21:\"leave.start_date:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:99;a:4:{s:1:\"a\";i:100;s:1:\"b\";s:22:\"leave.start_date:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:100;a:4:{s:1:\"a\";i:101;s:1:\"b\";s:19:\"leave.end_date:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:101;a:4:{s:1:\"a\";i:102;s:1:\"b\";s:20:\"leave.end_date:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:102;a:4:{s:1:\"a\";i:103;s:1:\"b\";s:24:\"leave.duration_days:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:103;a:4:{s:1:\"a\";i:104;s:1:\"b\";s:25:\"leave.duration_days:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:104;a:4:{s:1:\"a\";i:105;s:1:\"b\";s:17:\"leave.reason:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:105;a:4:{s:1:\"a\";i:106;s:1:\"b\";s:18:\"leave.reason:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:106;a:4:{s:1:\"a\";i:107;s:1:\"b\";s:21:\"leave.proof_path:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:107;a:4:{s:1:\"a\";i:108;s:1:\"b\";s:22:\"leave.proof_path:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:108;a:4:{s:1:\"a\";i:109;s:1:\"b\";s:17:\"leave.status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:109;a:4:{s:1:\"a\";i:110;s:1:\"b\";s:18:\"leave.status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:110;a:4:{s:1:\"a\";i:111;s:1:\"b\";s:22:\"leave.approved_by:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:111;a:4:{s:1:\"a\";i:112;s:1:\"b\";s:23:\"leave.approved_by:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:112;a:4:{s:1:\"a\";i:113;s:1:\"b\";s:26:\"leave_balance.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:113;a:4:{s:1:\"a\";i:114;s:1:\"b\";s:27:\"leave_balance.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:114;a:4:{s:1:\"a\";i:115;s:1:\"b\";s:29:\"leave_balance.leave_type:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:115;a:4:{s:1:\"a\";i:116;s:1:\"b\";s:30:\"leave_balance.leave_type:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:116;a:4:{s:1:\"a\";i:117;s:1:\"b\";s:32:\"leave_balance.leave_type_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:117;a:4:{s:1:\"a\";i:118;s:1:\"b\";s:33:\"leave_balance.leave_type_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:118;a:4:{s:1:\"a\";i:119;s:1:\"b\";s:29:\"leave_balance.total_days:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:119;a:4:{s:1:\"a\";i:120;s:1:\"b\";s:30:\"leave_balance.total_days:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:120;a:4:{s:1:\"a\";i:121;s:1:\"b\";s:28:\"leave_balance.used_days:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:121;a:4:{s:1:\"a\";i:122;s:1:\"b\";s:29:\"leave_balance.used_days:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:122;a:4:{s:1:\"a\";i:123;s:1:\"b\";s:23:\"leave_balance.year:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:123;a:4:{s:1:\"a\";i:124;s:1:\"b\";s:24:\"leave_balance.year:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:124;a:4:{s:1:\"a\";i:125;s:1:\"b\";s:20:\"leave_type.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:125;a:4:{s:1:\"a\";i:126;s:1:\"b\";s:21:\"leave_type.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:126;a:4:{s:1:\"a\";i:127;s:1:\"b\";s:28:\"leave_type.display_name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:127;a:4:{s:1:\"a\";i:128;s:1:\"b\";s:29:\"leave_type.display_name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:128;a:4:{s:1:\"a\";i:129;s:1:\"b\";s:32:\"leave_type.requires_balance:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:129;a:4:{s:1:\"a\";i:130;s:1:\"b\";s:33:\"leave_type.requires_balance:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:130;a:4:{s:1:\"a\";i:131;s:1:\"b\";s:28:\"leave_type.default_days:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:131;a:4:{s:1:\"a\";i:132;s:1:\"b\";s:29:\"leave_type.default_days:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:132;a:4:{s:1:\"a\";i:133;s:1:\"b\";s:21:\"overtime.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:133;a:4:{s:1:\"a\";i:134;s:1:\"b\";s:22:\"overtime.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:134;a:4:{s:1:\"a\";i:135;s:1:\"b\";s:22:\"overtime.shift_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:135;a:4:{s:1:\"a\";i:136;s:1:\"b\";s:23:\"overtime.shift_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:136;a:4:{s:1:\"a\";i:137;s:1:\"b\";s:18:\"overtime.date:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:137;a:4:{s:1:\"a\";i:138;s:1:\"b\";s:19:\"overtime.date:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:138;a:4:{s:1:\"a\";i:139;s:1:\"b\";s:24:\"overtime.start_time:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:139;a:4:{s:1:\"a\";i:140;s:1:\"b\";s:25:\"overtime.start_time:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:140;a:4:{s:1:\"a\";i:141;s:1:\"b\";s:22:\"overtime.end_time:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:141;a:4:{s:1:\"a\";i:142;s:1:\"b\";s:23:\"overtime.end_time:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:142;a:4:{s:1:\"a\";i:143;s:1:\"b\";s:20:\"overtime.reason:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:143;a:4:{s:1:\"a\";i:144;s:1:\"b\";s:21:\"overtime.reason:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:144;a:4:{s:1:\"a\";i:145;s:1:\"b\";s:20:\"overtime.status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:145;a:4:{s:1:\"a\";i:146;s:1:\"b\";s:21:\"overtime.status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:146;a:4:{s:1:\"a\";i:147;s:1:\"b\";s:25:\"overtime.approved_by:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:147;a:4:{s:1:\"a\";i:148;s:1:\"b\";s:26:\"overtime.approved_by:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:148;a:4:{s:1:\"a\";i:149;s:1:\"b\";s:20:\"permission.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:149;a:4:{s:1:\"a\";i:150;s:1:\"b\";s:21:\"permission.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:150;a:4:{s:1:\"a\";i:151;s:1:\"b\";s:14:\"role.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:151;a:4:{s:1:\"a\";i:152;s:1:\"b\";s:15:\"role.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:152;a:4:{s:1:\"a\";i:153;s:1:\"b\";s:19:\"salary.user_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:153;a:4:{s:1:\"a\";i:154;s:1:\"b\";s:20:\"salary.user_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:154;a:4:{s:1:\"a\";i:155;s:1:\"b\";s:18:\"salary.period:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:155;a:4:{s:1:\"a\";i:156;s:1:\"b\";s:19:\"salary.period:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:156;a:4:{s:1:\"a\";i:157;s:1:\"b\";s:24:\"salary.period_start:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:157;a:4:{s:1:\"a\";i:158;s:1:\"b\";s:25:\"salary.period_start:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:158;a:4:{s:1:\"a\";i:159;s:1:\"b\";s:22:\"salary.period_end:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:159;a:4:{s:1:\"a\";i:160;s:1:\"b\";s:23:\"salary.period_end:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:160;a:4:{s:1:\"a\";i:161;s:1:\"b\";s:23:\"salary.base_salary:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:161;a:4:{s:1:\"a\";i:162;s:1:\"b\";s:24:\"salary.base_salary:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:162;a:4:{s:1:\"a\";i:163;s:1:\"b\";s:27:\"salary.total_allowance:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:163;a:4:{s:1:\"a\";i:164;s:1:\"b\";s:28:\"salary.total_allowance:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:164;a:4:{s:1:\"a\";i:165;s:1:\"b\";s:27:\"salary.total_deduction:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:165;a:4:{s:1:\"a\";i:166;s:1:\"b\";s:28:\"salary.total_deduction:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:166;a:4:{s:1:\"a\";i:167;s:1:\"b\";s:22:\"salary.net_salary:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:167;a:4:{s:1:\"a\";i:168;s:1:\"b\";s:23:\"salary.net_salary:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:168;a:4:{s:1:\"a\";i:169;s:1:\"b\";s:18:\"salary.status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:169;a:4:{s:1:\"a\";i:170;s:1:\"b\";s:19:\"salary.status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:170;a:4:{s:1:\"a\";i:171;s:1:\"b\";s:17:\"salary.notes:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:171;a:4:{s:1:\"a\";i:172;s:1:\"b\";s:18:\"salary.notes:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:172;a:4:{s:1:\"a\";i:173;s:1:\"b\";s:26:\"salary_item.salary_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:173;a:4:{s:1:\"a\";i:174;s:1:\"b\";s:27:\"salary_item.salary_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:174;a:4:{s:1:\"a\";i:175;s:1:\"b\";s:21:\"salary_item.type:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:175;a:4:{s:1:\"a\";i:176;s:1:\"b\";s:22:\"salary_item.type:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:176;a:4:{s:1:\"a\";i:177;s:1:\"b\";s:22:\"salary_item.label:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:177;a:4:{s:1:\"a\";i:178;s:1:\"b\";s:23:\"salary_item.label:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:178;a:4:{s:1:\"a\";i:179;s:1:\"b\";s:23:\"salary_item.amount:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:179;a:4:{s:1:\"a\";i:180;s:1:\"b\";s:24:\"salary_item.amount:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:180;a:4:{s:1:\"a\";i:181;s:1:\"b\";s:15:\"shift.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:181;a:4:{s:1:\"a\";i:182;s:1:\"b\";s:16:\"shift.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:182;a:4:{s:1:\"a\";i:183;s:1:\"b\";s:22:\"shift.description:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:183;a:4:{s:1:\"a\";i:184;s:1:\"b\";s:23:\"shift.description:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:184;a:4:{s:1:\"a\";i:185;s:1:\"b\";s:21:\"shift.start_time:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:185;a:4:{s:1:\"a\";i:186;s:1:\"b\";s:22:\"shift.start_time:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:186;a:4:{s:1:\"a\";i:187;s:1:\"b\";s:19:\"shift.end_time:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:187;a:4:{s:1:\"a\";i:188;s:1:\"b\";s:20:\"shift.end_time:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:188;a:4:{s:1:\"a\";i:189;s:1:\"b\";s:25:\"shift.clock_in_start:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:189;a:4:{s:1:\"a\";i:190;s:1:\"b\";s:26:\"shift.clock_in_start:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:190;a:4:{s:1:\"a\";i:191;s:1:\"b\";s:23:\"shift.clock_in_end:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:191;a:4:{s:1:\"a\";i:192;s:1:\"b\";s:24:\"shift.clock_in_end:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:192;a:4:{s:1:\"a\";i:193;s:1:\"b\";s:26:\"shift.clock_out_start:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:193;a:4:{s:1:\"a\";i:194;s:1:\"b\";s:27:\"shift.clock_out_start:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:194;a:4:{s:1:\"a\";i:195;s:1:\"b\";s:24:\"shift.clock_out_end:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:195;a:4:{s:1:\"a\";i:196;s:1:\"b\";s:25:\"shift.clock_out_end:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:196;a:4:{s:1:\"a\";i:197;s:1:\"b\";s:15:\"shift.type:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:197;a:4:{s:1:\"a\";i:198;s:1:\"b\";s:16:\"shift.type:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:198;a:4:{s:1:\"a\";i:199;s:1:\"b\";s:26:\"shift.effective_start:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:199;a:4:{s:1:\"a\";i:200;s:1:\"b\";s:27:\"shift.effective_start:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:200;a:4:{s:1:\"a\";i:201;s:1:\"b\";s:24:\"shift.effective_end:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:201;a:4:{s:1:\"a\";i:202;s:1:\"b\";s:25:\"shift.effective_end:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:202;a:4:{s:1:\"a\";i:203;s:1:\"b\";s:21:\"shift.is_default:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:203;a:4:{s:1:\"a\";i:204;s:1:\"b\";s:22:\"shift.is_default:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:204;a:4:{s:1:\"a\";i:205;s:1:\"b\";s:20:\"shift.is_active:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:205;a:4:{s:1:\"a\";i:206;s:1:\"b\";s:21:\"shift.is_active:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:206;a:4:{s:1:\"a\";i:207;s:1:\"b\";s:21:\"team.division_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:207;a:4:{s:1:\"a\";i:208;s:1:\"b\";s:22:\"team.division_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:208;a:4:{s:1:\"a\";i:209;s:1:\"b\";s:14:\"team.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:209;a:4:{s:1:\"a\";i:210;s:1:\"b\";s:15:\"team.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:210;a:4:{s:1:\"a\";i:211;s:1:\"b\";s:17:\"team.lead_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:211;a:4:{s:1:\"a\";i:212;s:1:\"b\";s:18:\"team.lead_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:212;a:4:{s:1:\"a\";i:213;s:1:\"b\";s:20:\"user.account_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:213;a:4:{s:1:\"a\";i:214;s:1:\"b\";s:21:\"user.account_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:214;a:4:{s:1:\"a\";i:215;s:1:\"b\";s:14:\"user.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:215;a:4:{s:1:\"a\";i:216;s:1:\"b\";s:15:\"user.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:216;a:4:{s:1:\"a\";i:217;s:1:\"b\";s:13:\"user.nik:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:217;a:4:{s:1:\"a\";i:218;s:1:\"b\";s:14:\"user.nik:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:218;a:4:{s:1:\"a\";i:219;s:1:\"b\";s:15:\"user.phone:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:219;a:4:{s:1:\"a\";i:220;s:1:\"b\";s:16:\"user.phone:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:220;a:4:{s:1:\"a\";i:221;s:1:\"b\";s:17:\"user.address:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:221;a:4:{s:1:\"a\";i:222;s:1:\"b\";s:18:\"user.address:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:222;a:4:{s:1:\"a\";i:223;s:1:\"b\";s:16:\"user.gender:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:223;a:4:{s:1:\"a\";i:224;s:1:\"b\";s:17:\"user.gender:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:224;a:4:{s:1:\"a\";i:225;s:1:\"b\";s:21:\"user.birth_place:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:225;a:4:{s:1:\"a\";i:226;s:1:\"b\";s:22:\"user.birth_place:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:226;a:4:{s:1:\"a\";i:227;s:1:\"b\";s:20:\"user.birth_date:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:227;a:4:{s:1:\"a\";i:228;s:1:\"b\";s:21:\"user.birth_date:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:228;a:4:{s:1:\"a\";i:229;s:1:\"b\";s:18:\"user.position:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:229;a:4:{s:1:\"a\";i:230;s:1:\"b\";s:19:\"user.position:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:230;a:4:{s:1:\"a\";i:231;s:1:\"b\";s:21:\"user.division_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:231;a:4:{s:1:\"a\";i:232;s:1:\"b\";s:22:\"user.division_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:232;a:4:{s:1:\"a\";i:233;s:1:\"b\";s:17:\"user.team_id:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:233;a:4:{s:1:\"a\";i:234;s:1:\"b\";s:18:\"user.team_id:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:234;a:4:{s:1:\"a\";i:235;s:1:\"b\";s:18:\"user.hired_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:235;a:4:{s:1:\"a\";i:236;s:1:\"b\";s:19:\"user.hired_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:236;a:4:{s:1:\"a\";i:237;s:1:\"b\";s:27:\"user.employment_status:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:237;a:4:{s:1:\"a\";i:238;s:1:\"b\";s:28:\"user.employment_status:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:238;a:4:{s:1:\"a\";i:239;s:1:\"b\";s:21:\"user.resigned_at:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:239;a:4:{s:1:\"a\";i:240;s:1:\"b\";s:22:\"user.resigned_at:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:240;a:4:{s:1:\"a\";i:241;s:1:\"b\";s:21:\"user.profile_pic:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:241;a:4:{s:1:\"a\";i:242;s:1:\"b\";s:22:\"user.profile_pic:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:242;a:4:{s:1:\"a\";i:243;s:1:\"b\";s:22:\"working_days.name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:243;a:4:{s:1:\"a\";i:244;s:1:\"b\";s:23:\"working_days.name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:244;a:4:{s:1:\"a\";i:245;s:1:\"b\";s:30:\"working_days.display_name:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:245;a:4:{s:1:\"a\";i:246;s:1:\"b\";s:31:\"working_days.display_name:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:246;a:4:{s:1:\"a\";i:247;s:1:\"b\";s:30:\"working_days.days_of_week:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:247;a:4:{s:1:\"a\";i:248;s:1:\"b\";s:31:\"working_days.days_of_week:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:248;a:4:{s:1:\"a\";i:249;s:1:\"b\";s:29:\"working_days.description:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:249;a:4:{s:1:\"a\";i:250;s:1:\"b\";s:30:\"working_days.description:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:250;a:4:{s:1:\"a\";i:251;s:1:\"b\";s:28:\"working_days.is_default:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:251;a:4:{s:1:\"a\";i:252;s:1:\"b\";s:29:\"working_days.is_default:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:252;a:4:{s:1:\"a\";i:253;s:1:\"b\";s:27:\"working_days.is_active:read\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:253;a:4:{s:1:\"a\";i:254;s:1:\"b\";s:28:\"working_days.is_active:write\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:254;a:4:{s:1:\"a\";i:255;s:1:\"b\";s:12:\"account:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:255;a:4:{s:1:\"a\";i:256;s:1:\"b\";s:14:\"account:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:256;a:4:{s:1:\"a\";i:257;s:1:\"b\";s:12:\"account:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:257;a:4:{s:1:\"a\";i:258;s:1:\"b\";s:12:\"account:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:258;a:4:{s:1:\"a\";i:259;s:1:\"b\";s:14:\"account:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:259;a:4:{s:1:\"a\";i:260;s:1:\"b\";s:19:\"account:assign_role\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:260;a:4:{s:1:\"a\";i:261;s:1:\"b\";s:21:\"account:unassign_role\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:261;a:4:{s:1:\"a\";i:262;s:1:\"b\";s:25:\"account:assign_permission\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:262;a:4:{s:1:\"a\";i:263;s:1:\"b\";s:27:\"account:unassign_permission\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:263;a:4:{s:1:\"a\";i:264;s:1:\"b\";s:9:\"role:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:264;a:4:{s:1:\"a\";i:265;s:1:\"b\";s:11:\"role:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:265;a:4:{s:1:\"a\";i:266;s:1:\"b\";s:14:\"role:bulk-edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:266;a:4:{s:1:\"a\";i:267;s:1:\"b\";s:16:\"role:bulk-delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:267;a:4:{s:1:\"a\";i:268;s:1:\"b\";s:9:\"role:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:268;a:4:{s:1:\"a\";i:269;s:1:\"b\";s:9:\"role:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:269;a:4:{s:1:\"a\";i:270;s:1:\"b\";s:11:\"role:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:270;a:4:{s:1:\"a\";i:271;s:1:\"b\";s:13:\"division:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:271;a:4:{s:1:\"a\";i:272;s:1:\"b\";s:15:\"division:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:272;a:4:{s:1:\"a\";i:273;s:1:\"b\";s:13:\"division:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:273;a:4:{s:1:\"a\";i:274;s:1:\"b\";s:13:\"division:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:274;a:4:{s:1:\"a\";i:275;s:1:\"b\";s:15:\"division:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:275;a:4:{s:1:\"a\";i:276;s:1:\"b\";s:9:\"team:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:276;a:4:{s:1:\"a\";i:277;s:1:\"b\";s:11:\"team:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:277;a:4:{s:1:\"a\";i:278;s:1:\"b\";s:9:\"team:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:278;a:4:{s:1:\"a\";i:279;s:1:\"b\";s:9:\"team:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:279;a:4:{s:1:\"a\";i:280;s:1:\"b\";s:11:\"team:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:4;i:2;i:6;}}i:280;a:4:{s:1:\"a\";i:281;s:1:\"b\";s:9:\"user:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:281;a:4:{s:1:\"a\";i:282;s:1:\"b\";s:11:\"user:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:282;a:4:{s:1:\"a\";i:283;s:1:\"b\";s:9:\"user:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:283;a:4:{s:1:\"a\";i:284;s:1:\"b\";s:9:\"user:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:284;a:4:{s:1:\"a\";i:285;s:1:\"b\";s:11:\"user:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:4;i:2;i:5;i:3;i:6;}}i:285;a:4:{s:1:\"a\";i:286;s:1:\"b\";s:16:\"base-salary:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:286;a:4:{s:1:\"a\";i:287;s:1:\"b\";s:18:\"base-salary:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:287;a:4:{s:1:\"a\";i:288;s:1:\"b\";s:16:\"base-salary:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:288;a:4:{s:1:\"a\";i:289;s:1:\"b\";s:18:\"base-salary:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:289;a:4:{s:1:\"a\";i:290;s:1:\"b\";s:11:\"salary:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:290;a:4:{s:1:\"a\";i:291;s:1:\"b\";s:13:\"salary:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:291;a:4:{s:1:\"a\";i:292;s:1:\"b\";s:13:\"salary:report\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:292;a:4:{s:1:\"a\";i:293;s:1:\"b\";s:11:\"salary:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:293;a:4:{s:1:\"a\";i:294;s:1:\"b\";s:11:\"salary:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:294;a:4:{s:1:\"a\";i:295;s:1:\"b\";s:13:\"salary:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:295;a:4:{s:1:\"a\";i:296;s:1:\"b\";s:15:\"salary:finalize\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:296;a:4:{s:1:\"a\";i:297;s:1:\"b\";s:15:\"salary:download\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:297;a:4:{s:1:\"a\";i:298;s:1:\"b\";s:18:\"salary-item:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:298;a:4:{s:1:\"a\";i:299;s:1:\"b\";s:18:\"salary-item:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:299;a:4:{s:1:\"a\";i:300;s:1:\"b\";s:15:\"attendance:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:300;a:4:{s:1:\"a\";i:301;s:1:\"b\";s:19:\"attendance:clock_in\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:301;a:4:{s:1:\"a\";i:302;s:1:\"b\";s:20:\"attendance:clock_out\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:302;a:4:{s:1:\"a\";i:303;s:1:\"b\";s:15:\"attendance:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:303;a:4:{s:1:\"a\";i:304;s:1:\"b\";s:17:\"attendance:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:304;a:4:{s:1:\"a\";i:305;s:1:\"b\";s:17:\"attendance:review\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:305;a:4:{s:1:\"a\";i:306;s:1:\"b\";s:21:\"attendance:view_photo\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:306;a:4:{s:1:\"a\";i:307;s:1:\"b\";s:24:\"attendance_reason:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:307;a:4:{s:1:\"a\";i:308;s:1:\"b\";s:22:\"attendance_reason:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:308;a:4:{s:1:\"a\";i:309;s:1:\"b\";s:22:\"attendance_reason:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:309;a:4:{s:1:\"a\";i:310;s:1:\"b\";s:24:\"attendance_reason:review\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:5;i:2;i:6;}}i:310;a:4:{s:1:\"a\";i:311;s:1:\"b\";s:10:\"leave:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:311;a:4:{s:1:\"a\";i:312;s:1:\"b\";s:12:\"leave:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:312;a:4:{s:1:\"a\";i:313;s:1:\"b\";s:13:\"leave:preview\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:313;a:4:{s:1:\"a\";i:314;s:1:\"b\";s:13:\"leave:summary\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:314;a:4:{s:1:\"a\";i:315;s:1:\"b\";s:15:\"leave-type:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:315;a:4:{s:1:\"a\";i:316;s:1:\"b\";s:23:\"leave-type:with-balance\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:316;a:4:{s:1:\"a\";i:317;s:1:\"b\";s:26:\"leave-type:without-balance\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:317;a:4:{s:1:\"a\";i:318;s:1:\"b\";s:17:\"leave-type:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:318;a:4:{s:1:\"a\";i:319;s:1:\"b\";s:15:\"leave-type:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:319;a:4:{s:1:\"a\";i:320;s:1:\"b\";s:15:\"leave-type:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:320;a:4:{s:1:\"a\";i:321;s:1:\"b\";s:17:\"leave-type:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:321;a:4:{s:1:\"a\";i:322;s:1:\"b\";s:18:\"leave-balance:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:322;a:4:{s:1:\"a\";i:323;s:1:\"b\";s:20:\"leave-balance:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:323;a:4:{s:1:\"a\";i:324;s:1:\"b\";s:18:\"leave-balance:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:324;a:4:{s:1:\"a\";i:325;s:1:\"b\";s:18:\"leave-balance:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:325;a:4:{s:1:\"a\";i:326;s:1:\"b\";s:20:\"leave-balance:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:326;a:4:{s:1:\"a\";i:327;s:1:\"b\";s:10:\"leave:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:327;a:4:{s:1:\"a\";i:328;s:1:\"b\";s:12:\"leave:cancel\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:328;a:4:{s:1:\"a\";i:329;s:1:\"b\";s:13:\"leave:approve\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:329;a:4:{s:1:\"a\";i:330;s:1:\"b\";s:12:\"leave:reject\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:330;a:4:{s:1:\"a\";i:331;s:1:\"b\";s:10:\"leave:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:331;a:4:{s:1:\"a\";i:332;s:1:\"b\";s:12:\"leave:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:332;a:4:{s:1:\"a\";i:333;s:1:\"b\";s:10:\"shift:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:333;a:4:{s:1:\"a\";i:334;s:1:\"b\";s:12:\"shift:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:334;a:4:{s:1:\"a\";i:335;s:1:\"b\";s:13:\"shift:view-my\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:335;a:4:{s:1:\"a\";i:336;s:1:\"b\";s:21:\"shift:view-unassigned\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:336;a:4:{s:1:\"a\";i:337;s:1:\"b\";s:19:\"shift:bulk-unassign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:337;a:4:{s:1:\"a\";i:338;s:1:\"b\";s:13:\"overtime:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:338;a:4:{s:1:\"a\";i:339;s:1:\"b\";s:15:\"overtime:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:339;a:4:{s:1:\"a\";i:340;s:1:\"b\";s:16:\"overtime:approve\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:340;a:4:{s:1:\"a\";i:341;s:1:\"b\";s:15:\"overtime:reject\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:341;a:4:{s:1:\"a\";i:342;s:1:\"b\";s:13:\"overtime:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:342;a:4:{s:1:\"a\";i:343;s:1:\"b\";s:15:\"overtime:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:343;a:4:{s:1:\"a\";i:344;s:1:\"b\";s:10:\"shift:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:344;a:4:{s:1:\"a\";i:345;s:1:\"b\";s:10:\"shift:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:345;a:4:{s:1:\"a\";i:346;s:1:\"b\";s:12:\"shift:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:346;a:4:{s:1:\"a\";i:347;s:1:\"b\";s:19:\"shift:view-assigned\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:347;a:4:{s:1:\"a\";i:348;s:1:\"b\";s:18:\"shift:view-summary\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:348;a:4:{s:1:\"a\";i:349;s:1:\"b\";s:17:\"shift:bulk-assign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:349;a:4:{s:1:\"a\";i:350;s:1:\"b\";s:12:\"shift:assign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:350;a:4:{s:1:\"a\";i:351;s:1:\"b\";s:14:\"shift:unassign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:351;a:4:{s:1:\"a\";i:352;s:1:\"b\";s:12:\"shift:change\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:352;a:4:{s:1:\"a\";i:353;s:1:\"b\";s:17:\"working-days:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:353;a:4:{s:1:\"a\";i:354;s:1:\"b\";s:20:\"working-days:view-my\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:354;a:4:{s:1:\"a\";i:355;s:1:\"b\";s:19:\"working-days:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:355;a:4:{s:1:\"a\";i:356;s:1:\"b\";s:24:\"working-days:bulk-assign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:356;a:4:{s:1:\"a\";i:357;s:1:\"b\";s:17:\"working-days:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:357;a:4:{s:1:\"a\";i:358;s:1:\"b\";s:17:\"working-days:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:358;a:4:{s:1:\"a\";i:359;s:1:\"b\";s:19:\"working-days:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:359;a:4:{s:1:\"a\";i:360;s:1:\"b\";s:19:\"working-days:assign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:360;a:4:{s:1:\"a\";i:361;s:1:\"b\";s:21:\"working-days:unassign\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:361;a:4:{s:1:\"a\";i:362;s:1:\"b\";s:13:\"document:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:362;a:4:{s:1:\"a\";i:363;s:1:\"b\";s:15:\"document:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:363;a:4:{s:1:\"a\";i:364;s:1:\"b\";s:18:\"document-type:view\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:364;a:4:{s:1:\"a\";i:365;s:1:\"b\";s:20:\"document-type:create\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:365;a:4:{s:1:\"a\";i:366;s:1:\"b\";s:18:\"document-type:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:366;a:4:{s:1:\"a\";i:367;s:1:\"b\";s:18:\"document-type:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:367;a:4:{s:1:\"a\";i:368;s:1:\"b\";s:20:\"document-type:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:368;a:4:{s:1:\"a\";i:369;s:1:\"b\";s:13:\"document:show\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:369;a:4:{s:1:\"a\";i:370;s:1:\"b\";s:13:\"document:edit\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:370;a:4:{s:1:\"a\";i:371;s:1:\"b\";s:15:\"document:delete\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}i:371;a:4:{s:1:\"a\";i:372;s:1:\"b\";s:17:\"document:download\";s:1:\"c\";s:7:\"sanctum\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:6;}}}s:5:\"roles\";a:4:{i:0;a:3:{s:1:\"a\";i:1;s:1:\"b\";s:9:\"executive\";s:1:\"c\";s:7:\"sanctum\";}i:1;a:3:{s:1:\"a\";i:6;s:1:\"b\";s:11:\"super-admin\";s:1:\"c\";s:7:\"sanctum\";}i:2;a:3:{s:1:\"a\";i:5;s:1:\"b\";s:8:\"employee\";s:1:\"c\";s:7:\"sanctum\";}i:3;a:3:{s:1:\"a\";i:4;s:1:\"b\";s:7:\"manager\";s:1:\"c\";s:7:\"sanctum\";}}}', 1768464583);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `head_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `head_id`, `created_at`, `updated_at`) VALUES
(1, 'Omni Division', NULL, '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(2, 'Rice, Blanda and Roob Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(3, 'Harber, Hauck and Marvin Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(4, 'Feest Group Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(5, 'Zemlak-Jacobi Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(6, 'Rice, Ryan and McCullough Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(7, 'Johnson, Padberg and Bednar Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(8, 'Kuphal LLC Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(9, 'Veum, Zemlak and Morar Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(10, 'Schoen-Braun Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(11, 'Lesch-Moore Division', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57');

-- --------------------------------------------------------

--
-- Table structure for table `division_shift`
--

CREATE TABLE `division_shift` (
  `division_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `division_working_days`
--

CREATE TABLE `division_working_days` (
  `division_id` bigint(20) UNSIGNED NOT NULL,
  `working_days_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `document_type_id` bigint(20) UNSIGNED NOT NULL,
  `document_number` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `issued_at` date DEFAULT NULL,
  `expired_at` date DEFAULT NULL,
  `meta` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`meta`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `user_id`, `document_type_id`, `document_number`, `file_path`, `issued_at`, `expired_at`, `meta`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'DOC-694904A549DA1', 'documents/seed/sample_2.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(2, 1, 4, NULL, 'documents/seed/sample_4.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(3, 1, 5, 'DOC-694904A54A9C7', 'documents/seed/sample_5.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(4, 2, 1, 'DOC-694904A54AE10', 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(5, 2, 2, 'DOC-694904A54B298', 'documents/seed/sample_5.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(6, 2, 3, 'DOC-694904A54B783', 'documents/seed/sample_1.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(7, 2, 5, 'DOC-694904A54BC2E', 'documents/seed/sample_4.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(8, 3, 3, 'DOC-694904A54C041', 'documents/seed/sample_5.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(9, 3, 4, NULL, 'documents/seed/sample_3.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(10, 3, 5, 'DOC-694904A54C817', 'documents/seed/sample_1.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(11, 4, 2, 'DOC-694904A54CC24', 'documents/seed/sample_5.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(12, 4, 3, 'DOC-694904A54D056', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(13, 4, 5, 'DOC-694904A54D451', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(14, 5, 2, 'DOC-694904A54D826', 'documents/seed/sample_2.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(15, 5, 3, 'DOC-694904A54DD32', 'documents/seed/sample_1.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(16, 5, 4, NULL, 'documents/seed/sample_1.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(17, 5, 5, 'DOC-694904A54E914', 'documents/seed/sample_5.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(18, 6, 1, 'DOC-694904A54EF27', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(19, 6, 4, NULL, 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(20, 7, 3, 'DOC-694904A54F7BE', 'documents/seed/sample_1.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(21, 7, 4, NULL, 'documents/seed/sample_1.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(22, 8, 2, 'DOC-694904A54FFB6', 'documents/seed/sample_4.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(23, 8, 3, 'DOC-694904A5503C7', 'documents/seed/sample_1.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(24, 8, 5, 'DOC-694904A5507EC', 'documents/seed/sample_1.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(25, 9, 1, 'DOC-694904A550C98', 'documents/seed/sample_2.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(26, 9, 2, 'DOC-694904A55109D', 'documents/seed/sample_5.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(27, 10, 1, 'DOC-694904A55146D', 'documents/seed/sample_3.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(28, 10, 2, 'DOC-694904A5518BE', 'documents/seed/sample_1.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(29, 10, 3, 'DOC-694904A551D46', 'documents/seed/sample_2.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(30, 10, 5, 'DOC-694904A552166', 'documents/seed/sample_3.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(31, 11, 2, 'DOC-694904A55266B', 'documents/seed/sample_1.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(32, 11, 3, 'DOC-694904A552AB1', 'documents/seed/sample_3.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(33, 11, 4, NULL, 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(34, 12, 1, 'DOC-694904A553286', 'documents/seed/sample_4.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(35, 12, 2, 'DOC-694904A5536DB', 'documents/seed/sample_3.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(36, 12, 5, 'DOC-694904A553AF3', 'documents/seed/sample_4.pdf', '2025-08-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(37, 13, 1, 'DOC-694904A553EE4', 'documents/seed/sample_4.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(38, 13, 3, 'DOC-694904A554297', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(39, 13, 5, 'DOC-694904A55464C', 'documents/seed/sample_5.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(40, 14, 4, NULL, 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(41, 14, 5, 'DOC-694904A554DB6', 'documents/seed/sample_3.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(42, 15, 2, 'DOC-694904A555187', 'documents/seed/sample_3.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(43, 15, 3, 'DOC-694904A555567', 'documents/seed/sample_5.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(44, 16, 1, 'DOC-694904A555947', 'documents/seed/sample_3.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(45, 16, 2, 'DOC-694904A555D1B', 'documents/seed/sample_5.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(46, 17, 1, 'DOC-694904A556181', 'documents/seed/sample_5.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(47, 17, 2, 'DOC-694904A55651B', 'documents/seed/sample_3.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(48, 17, 3, 'DOC-694904A55689E', 'documents/seed/sample_2.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(49, 17, 4, NULL, 'documents/seed/sample_3.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(50, 18, 1, 'DOC-694904A557057', 'documents/seed/sample_1.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(51, 18, 2, 'DOC-694904A557421', 'documents/seed/sample_2.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(52, 18, 3, 'DOC-694904A557884', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(53, 18, 4, NULL, 'documents/seed/sample_1.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(54, 19, 1, 'DOC-694904A557FEE', 'documents/seed/sample_5.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(55, 19, 2, 'DOC-694904A5583AC', 'documents/seed/sample_3.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(56, 19, 3, 'DOC-694904A55873E', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(57, 19, 5, 'DOC-694904A558B12', 'documents/seed/sample_2.pdf', '2025-08-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(58, 20, 1, 'DOC-694904A558F37', 'documents/seed/sample_1.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(59, 20, 4, NULL, 'documents/seed/sample_2.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(60, 21, 1, 'DOC-694904A55988E', 'documents/seed/sample_5.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(61, 21, 2, 'DOC-694904A559C0E', 'documents/seed/sample_3.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(62, 21, 3, 'DOC-694904A559FC8', 'documents/seed/sample_5.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(63, 22, 1, 'DOC-694904A55A3E6', 'documents/seed/sample_5.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(64, 22, 2, 'DOC-694904A55A7AA', 'documents/seed/sample_2.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(65, 22, 4, NULL, 'documents/seed/sample_2.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(66, 22, 5, 'DOC-694904A55AF3A', 'documents/seed/sample_3.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(67, 23, 1, 'DOC-694904A55B337', 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(68, 23, 2, 'DOC-694904A55B6E0', 'documents/seed/sample_2.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(69, 23, 4, NULL, 'documents/seed/sample_2.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(70, 23, 5, 'DOC-694904A55BE28', 'documents/seed/sample_5.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(71, 24, 3, 'DOC-694904A55C202', 'documents/seed/sample_3.pdf', '2025-08-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(72, 24, 5, 'DOC-694904A55C5AF', 'documents/seed/sample_1.pdf', '2025-03-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(73, 25, 1, 'DOC-694904A55CA02', 'documents/seed/sample_5.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(74, 25, 2, 'DOC-694904A55CDF0', 'documents/seed/sample_4.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(75, 25, 4, NULL, 'documents/seed/sample_4.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(76, 25, 5, 'DOC-694904A55D536', 'documents/seed/sample_5.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(77, 26, 4, NULL, 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(78, 26, 5, 'DOC-694904A55DD9C', 'documents/seed/sample_1.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(79, 27, 1, 'DOC-694904A55E2AC', 'documents/seed/sample_4.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(80, 27, 3, 'DOC-694904A55E7FC', 'documents/seed/sample_4.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(81, 27, 4, NULL, 'documents/seed/sample_4.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(82, 27, 5, 'DOC-694904A55F084', 'documents/seed/sample_2.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(83, 28, 2, 'DOC-694904A55F43D', 'documents/seed/sample_3.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(84, 28, 4, NULL, 'documents/seed/sample_2.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(85, 29, 1, 'DOC-694904A55FB8F', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(86, 29, 4, NULL, 'documents/seed/sample_5.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(87, 30, 1, 'DOC-694904A5602F9', 'documents/seed/sample_5.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(88, 30, 5, 'DOC-694904A5606CD', 'documents/seed/sample_3.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(89, 31, 1, 'DOC-694904A560AD1', 'documents/seed/sample_3.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(90, 31, 2, 'DOC-694904A560EE5', 'documents/seed/sample_4.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(91, 31, 4, NULL, 'documents/seed/sample_2.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(92, 31, 5, 'DOC-694904A561675', 'documents/seed/sample_5.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(93, 32, 1, 'DOC-694904A561A54', 'documents/seed/sample_1.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(94, 32, 2, 'DOC-694904A561E50', 'documents/seed/sample_4.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(95, 32, 3, 'DOC-694904A562265', 'documents/seed/sample_4.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(96, 33, 1, 'DOC-694904A5626AD', 'documents/seed/sample_5.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(97, 33, 2, 'DOC-694904A562AAA', 'documents/seed/sample_2.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(98, 33, 5, 'DOC-694904A562EB1', 'documents/seed/sample_5.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(99, 34, 3, 'DOC-694904A56335F', 'documents/seed/sample_5.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(100, 34, 5, 'DOC-694904A5637AE', 'documents/seed/sample_2.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(101, 35, 1, 'DOC-694904A563C82', 'documents/seed/sample_5.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(102, 35, 3, 'DOC-694904A564067', 'documents/seed/sample_4.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(103, 36, 1, 'DOC-694904A5644A6', 'documents/seed/sample_4.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(104, 36, 2, 'DOC-694904A564899', 'documents/seed/sample_5.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(105, 36, 3, 'DOC-694904A564C63', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(106, 37, 1, 'DOC-694904A565066', 'documents/seed/sample_1.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(107, 37, 2, 'DOC-694904A56543E', 'documents/seed/sample_3.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(108, 37, 3, 'DOC-694904A5657FF', 'documents/seed/sample_2.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(109, 38, 3, 'DOC-694904A565BDC', 'documents/seed/sample_5.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(110, 38, 4, NULL, 'documents/seed/sample_2.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(111, 39, 2, 'DOC-694904A56636A', 'documents/seed/sample_3.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(112, 39, 3, 'DOC-694904A566722', 'documents/seed/sample_1.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(113, 39, 4, NULL, 'documents/seed/sample_3.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(114, 39, 5, 'DOC-694904A566E73', 'documents/seed/sample_4.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(115, 40, 2, 'DOC-694904A5672E4', 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(116, 40, 3, 'DOC-694904A56769D', 'documents/seed/sample_2.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(117, 40, 4, NULL, 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(118, 41, 2, 'DOC-694904A567E1B', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(119, 41, 3, 'DOC-694904A5681E3', 'documents/seed/sample_4.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(120, 41, 4, NULL, 'documents/seed/sample_1.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(121, 41, 5, 'DOC-694904A568989', 'documents/seed/sample_3.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(122, 42, 1, 'DOC-694904A568D73', 'documents/seed/sample_5.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(123, 42, 2, 'DOC-694904A56916C', 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(124, 42, 4, NULL, 'documents/seed/sample_4.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(125, 43, 1, 'DOC-694904A5698FB', 'documents/seed/sample_3.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(126, 43, 3, 'DOC-694904A569C7A', 'documents/seed/sample_5.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(127, 44, 3, 'DOC-694904A56A047', 'documents/seed/sample_4.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(128, 44, 5, 'DOC-694904A56A42B', 'documents/seed/sample_1.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(129, 45, 2, 'DOC-694904A56A841', 'documents/seed/sample_4.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(130, 45, 3, 'DOC-694904A56ABF2', 'documents/seed/sample_1.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(131, 46, 1, 'DOC-694904A56B0D4', 'documents/seed/sample_2.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(132, 46, 2, 'DOC-694904A56B4F5', 'documents/seed/sample_4.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(133, 46, 5, 'DOC-694904A56B8CA', 'documents/seed/sample_2.pdf', '2025-03-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(134, 47, 2, 'DOC-694904A56BCDB', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(135, 47, 3, 'DOC-694904A56C0C3', 'documents/seed/sample_1.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(136, 47, 4, NULL, 'documents/seed/sample_2.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(137, 47, 5, 'DOC-694904A56C8AD', 'documents/seed/sample_5.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(138, 48, 2, 'DOC-694904A56CCC2', 'documents/seed/sample_1.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(139, 48, 3, 'DOC-694904A56D07A', 'documents/seed/sample_2.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(140, 48, 4, NULL, 'documents/seed/sample_3.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(141, 48, 5, 'DOC-694904A56D9B8', 'documents/seed/sample_5.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(142, 49, 1, 'DOC-694904A56DEFD', 'documents/seed/sample_1.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(143, 49, 4, NULL, 'documents/seed/sample_1.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(144, 49, 5, 'DOC-694904A56E8B1', 'documents/seed/sample_3.pdf', '2025-03-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(145, 50, 1, 'DOC-694904A56ED06', 'documents/seed/sample_5.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(146, 50, 2, 'DOC-694904A56F0D9', 'documents/seed/sample_3.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(147, 50, 5, 'DOC-694904A56F4F4', 'documents/seed/sample_1.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(148, 51, 1, 'DOC-694904A56F8FE', 'documents/seed/sample_3.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(149, 51, 4, NULL, 'documents/seed/sample_2.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(150, 51, 5, 'DOC-694904A57005C', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(151, 52, 1, 'DOC-694904A57048D', 'documents/seed/sample_4.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(152, 52, 4, NULL, 'documents/seed/sample_5.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(153, 52, 5, 'DOC-694904A570FF2', 'documents/seed/sample_4.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(154, 53, 3, 'DOC-694904A5713C9', 'documents/seed/sample_2.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(155, 53, 4, NULL, 'documents/seed/sample_4.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(156, 53, 5, 'DOC-694904A571B90', 'documents/seed/sample_4.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(157, 54, 1, 'DOC-694904A571F2A', 'documents/seed/sample_1.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(158, 54, 2, 'DOC-694904A57231B', 'documents/seed/sample_1.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(159, 55, 2, 'DOC-694904A5726B9', 'documents/seed/sample_5.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(160, 55, 4, NULL, 'documents/seed/sample_1.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(161, 56, 2, 'DOC-694904A572E1F', 'documents/seed/sample_5.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(162, 56, 3, 'DOC-694904A573197', 'documents/seed/sample_2.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(163, 56, 4, NULL, 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(164, 56, 5, 'DOC-694904A57389E', 'documents/seed/sample_5.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(165, 57, 1, 'DOC-694904A573C3E', 'documents/seed/sample_5.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(166, 57, 3, 'DOC-694904A573FB2', 'documents/seed/sample_2.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(167, 57, 5, 'DOC-694904A57434B', 'documents/seed/sample_3.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(168, 58, 1, 'DOC-694904A5746EA', 'documents/seed/sample_1.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(169, 58, 5, 'DOC-694904A574A6C', 'documents/seed/sample_5.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(170, 59, 1, 'DOC-694904A574E05', 'documents/seed/sample_2.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(171, 59, 2, 'DOC-694904A57516E', 'documents/seed/sample_3.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(172, 59, 4, NULL, 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(173, 59, 5, 'DOC-694904A57584A', 'documents/seed/sample_1.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(174, 60, 2, 'DOC-694904A575BD7', 'documents/seed/sample_1.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(175, 60, 4, NULL, 'documents/seed/sample_5.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(176, 60, 5, 'DOC-694904A5762B9', 'documents/seed/sample_3.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(177, 61, 1, 'DOC-694904A57667F', 'documents/seed/sample_3.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(178, 61, 5, 'DOC-694904A576A93', 'documents/seed/sample_2.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(179, 62, 2, 'DOC-694904A576E4A', 'documents/seed/sample_1.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(180, 62, 3, 'DOC-694904A5771BF', 'documents/seed/sample_1.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(181, 62, 5, 'DOC-694904A57754F', 'documents/seed/sample_5.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(182, 63, 1, 'DOC-694904A5778E7', 'documents/seed/sample_5.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(183, 63, 2, 'DOC-694904A577C68', 'documents/seed/sample_1.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(184, 63, 3, 'DOC-694904A577FD3', 'documents/seed/sample_3.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(185, 63, 4, NULL, 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(186, 64, 1, 'DOC-694904A5786D2', 'documents/seed/sample_5.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(187, 64, 4, NULL, 'documents/seed/sample_4.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(188, 64, 5, 'DOC-694904A578DB0', 'documents/seed/sample_3.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(189, 65, 1, 'DOC-694904A57914A', 'documents/seed/sample_3.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(190, 65, 2, 'DOC-694904A5794DA', 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(191, 65, 3, 'DOC-694904A579872', 'documents/seed/sample_2.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(192, 66, 3, 'DOC-694904A579BFF', 'documents/seed/sample_2.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(193, 66, 4, NULL, 'documents/seed/sample_1.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(194, 66, 5, 'DOC-694904A57A2FC', 'documents/seed/sample_5.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(195, 67, 1, 'DOC-694904A57A739', 'documents/seed/sample_4.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(196, 67, 3, 'DOC-694904A57AB46', 'documents/seed/sample_2.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(197, 68, 3, 'DOC-694904A57AEFE', 'documents/seed/sample_2.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(198, 68, 5, 'DOC-694904A57B28E', 'documents/seed/sample_5.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(199, 69, 1, 'DOC-694904A57B67A', 'documents/seed/sample_2.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(200, 69, 2, 'DOC-694904A57BA48', 'documents/seed/sample_1.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(201, 70, 2, 'DOC-694904A57BE4B', 'documents/seed/sample_1.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(202, 70, 3, 'DOC-694904A57C24A', 'documents/seed/sample_4.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(203, 70, 4, NULL, 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(204, 71, 1, 'DOC-694904A57CAC9', 'documents/seed/sample_5.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(205, 71, 2, 'DOC-694904A57CFA0', 'documents/seed/sample_3.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(206, 72, 4, NULL, 'documents/seed/sample_3.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(207, 72, 5, 'DOC-694904A57D921', 'documents/seed/sample_5.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(208, 73, 1, 'DOC-694904A57DCC3', 'documents/seed/sample_1.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(209, 73, 2, 'DOC-694904A57E0BE', 'documents/seed/sample_2.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(210, 73, 3, 'DOC-694904A57E4F9', 'documents/seed/sample_5.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(211, 73, 5, 'DOC-694904A57E916', 'documents/seed/sample_4.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(212, 74, 1, 'DOC-694904A57ED38', 'documents/seed/sample_3.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(213, 74, 2, 'DOC-694904A57F0F0', 'documents/seed/sample_2.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(214, 74, 5, 'DOC-694904A57F49E', 'documents/seed/sample_1.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(215, 75, 1, 'DOC-694904A57F850', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(216, 75, 2, 'DOC-694904A57FBF1', 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(217, 75, 3, 'DOC-694904A57FFB9', 'documents/seed/sample_2.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(218, 75, 5, 'DOC-694904A58037F', 'documents/seed/sample_5.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(219, 76, 1, 'DOC-694904A58076E', 'documents/seed/sample_1.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(220, 76, 3, 'DOC-694904A580BA4', 'documents/seed/sample_4.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(221, 77, 3, 'DOC-694904A580F85', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(222, 77, 4, NULL, 'documents/seed/sample_3.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(223, 78, 3, 'DOC-694904A5816E9', 'documents/seed/sample_1.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(224, 78, 5, 'DOC-694904A581A78', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(225, 79, 2, 'DOC-694904A581E1A', 'documents/seed/sample_1.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(226, 79, 5, 'DOC-694904A582421', 'documents/seed/sample_5.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(227, 80, 1, 'DOC-694904A582875', 'documents/seed/sample_3.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(228, 80, 5, 'DOC-694904A582C40', 'documents/seed/sample_4.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(229, 81, 1, 'DOC-694904A583029', 'documents/seed/sample_2.pdf', '2025-08-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(230, 81, 5, 'DOC-694904A5833B7', 'documents/seed/sample_2.pdf', '2025-06-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(231, 82, 3, 'DOC-694904A583749', 'documents/seed/sample_4.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(232, 82, 4, NULL, 'documents/seed/sample_1.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(233, 83, 1, 'DOC-694904A583EA0', 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(234, 83, 3, 'DOC-694904A58423D', 'documents/seed/sample_3.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(235, 83, 5, 'DOC-694904A5845F7', 'documents/seed/sample_5.pdf', '2025-04-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(236, 84, 3, 'DOC-694904A5849B6', 'documents/seed/sample_1.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(237, 84, 4, NULL, 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(238, 85, 1, 'DOC-694904A585112', 'documents/seed/sample_3.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(239, 85, 5, 'DOC-694904A5854A7', 'documents/seed/sample_2.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(240, 86, 1, 'DOC-694904A585867', 'documents/seed/sample_4.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(241, 86, 2, 'DOC-694904A585C18', 'documents/seed/sample_4.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(242, 87, 1, 'DOC-694904A585FAC', 'documents/seed/sample_2.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(243, 87, 2, 'DOC-694904A58633D', 'documents/seed/sample_5.pdf', '2025-09-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(244, 87, 5, 'DOC-694904A58670E', 'documents/seed/sample_2.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(245, 88, 1, 'DOC-694904A586ACD', 'documents/seed/sample_5.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(246, 88, 3, 'DOC-694904A586E43', 'documents/seed/sample_1.pdf', '2025-10-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(247, 88, 4, NULL, 'documents/seed/sample_1.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(248, 88, 5, 'DOC-694904A587530', 'documents/seed/sample_4.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(249, 89, 2, 'DOC-694904A5878D9', 'documents/seed/sample_2.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(250, 89, 3, 'DOC-694904A587C57', 'documents/seed/sample_2.pdf', '2025-01-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(251, 89, 5, 'DOC-694904A587FE7', 'documents/seed/sample_1.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(252, 90, 3, 'DOC-694904A588383', 'documents/seed/sample_4.pdf', '2025-11-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(253, 90, 4, NULL, 'documents/seed/sample_1.pdf', '2025-04-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(254, 91, 1, 'DOC-694904A588A99', 'documents/seed/sample_1.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(255, 91, 2, 'DOC-694904A588E0D', 'documents/seed/sample_4.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(256, 91, 3, 'DOC-694904A58917A', 'documents/seed/sample_3.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(257, 91, 4, NULL, 'documents/seed/sample_4.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(258, 92, 2, 'DOC-694904A5898B3', 'documents/seed/sample_4.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(259, 92, 3, 'DOC-694904A589C27', 'documents/seed/sample_4.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(260, 93, 1, 'DOC-694904A589FB2', 'documents/seed/sample_5.pdf', '2025-05-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(261, 93, 2, 'DOC-694904A58A331', 'documents/seed/sample_4.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(262, 93, 4, NULL, 'documents/seed/sample_2.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(263, 93, 5, 'DOC-694904A58AA7C', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(264, 94, 2, 'DOC-694904A58AE1A', 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(265, 94, 3, 'DOC-694904A58B19B', 'documents/seed/sample_3.pdf', '2025-09-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(266, 94, 4, NULL, 'documents/seed/sample_5.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(267, 94, 5, 'DOC-694904A58BB35', 'documents/seed/sample_4.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(268, 95, 1, 'DOC-694904A58C052', 'documents/seed/sample_2.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(269, 95, 3, 'DOC-694904A58C534', 'documents/seed/sample_4.pdf', '2025-05-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(270, 95, 4, NULL, 'documents/seed/sample_4.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(271, 95, 5, 'DOC-694904A58CCB5', 'documents/seed/sample_4.pdf', '2025-07-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(272, 96, 1, 'DOC-694904A58D0D3', 'documents/seed/sample_3.pdf', '2025-02-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(273, 96, 2, 'DOC-694904A58D4AA', 'documents/seed/sample_4.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(274, 96, 3, 'DOC-694904A58D87A', 'documents/seed/sample_3.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(275, 96, 5, 'DOC-694904A58DC33', 'documents/seed/sample_4.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(276, 97, 1, 'DOC-694904A58DFDE', 'documents/seed/sample_5.pdf', '2025-06-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(277, 97, 3, 'DOC-694904A58E36E', 'documents/seed/sample_4.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(278, 97, 4, NULL, 'documents/seed/sample_5.pdf', '2025-07-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(279, 97, 5, 'DOC-694904A58EB58', 'documents/seed/sample_1.pdf', '2025-03-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(280, 98, 2, 'DOC-694904A58EF0C', 'documents/seed/sample_3.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(281, 98, 4, NULL, 'documents/seed/sample_2.pdf', '2025-01-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(282, 99, 1, 'DOC-694904A58F6C7', 'documents/seed/sample_3.pdf', '2024-12-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(283, 99, 4, NULL, 'documents/seed/sample_4.pdf', '2025-10-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(284, 100, 2, 'DOC-694904A58FE36', 'documents/seed/sample_3.pdf', '2025-03-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(285, 100, 3, 'DOC-694904A5901CC', 'documents/seed/sample_2.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(286, 100, 5, 'DOC-694904A590567', 'documents/seed/sample_5.pdf', '2024-12-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(287, 101, 1, 'DOC-694904A590935', 'documents/seed/sample_4.pdf', '2025-11-22', NULL, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(288, 101, 5, 'DOC-694904A590CF7', 'documents/seed/sample_4.pdf', '2025-02-22', '2026-12-22', '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `document_types`
--

CREATE TABLE `document_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `required` tinyint(1) NOT NULL DEFAULT 0,
  `expires` tinyint(1) NOT NULL DEFAULT 0,
  `has_number` tinyint(1) NOT NULL DEFAULT 0,
  `has_file` tinyint(1) NOT NULL DEFAULT 1,
  `meta_schema` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`meta_schema`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `document_types`
--

INSERT INTO `document_types` (`id`, `name`, `category`, `required`, `expires`, `has_number`, `has_file`, `meta_schema`, `created_at`, `updated_at`) VALUES
(1, 'KTP', 'Identitas', 1, 0, 1, 1, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(2, 'NPWP', 'Perpajakan', 1, 0, 1, 1, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(3, 'Kontrak Kerja (PKWT/PKWTT)', 'Legal', 1, 1, 1, 1, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(4, 'Ijazah Terakhir', 'Edukasi', 1, 0, 0, 1, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(5, 'Sertifikat Kompetensi', 'Skill', 0, 1, 1, 1, '[]', '2025-12-22 08:43:17', '2025-12-22 08:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_uploads`
--

CREATE TABLE `file_uploads` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `context` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `disk` varchar(255) NOT NULL DEFAULT 'public',
  `entity_type` varchar(255) NOT NULL,
  `entity_id` bigint(20) UNSIGNED NOT NULL,
  `original_name` varchar(255) NOT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `size` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `is_recurring` tinyint(1) NOT NULL DEFAULT 1,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `holidays`
--

INSERT INTO `holidays` (`id`, `name`, `date`, `is_recurring`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Tahun Baru Masehi', '2024-01-01', 1, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 'Hari Buruh Internasional', '2024-05-01', 1, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 'Hari Kemerdekaan RI', '2024-08-17', 1, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 'Tahun Baru Imlek', '2024-02-10', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 'Hari Raya Nyepi', '2024-03-11', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 'Wafat Isa Almasih', '2024-03-29', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 'Hari Raya Idul Fitri 1', '2024-04-10', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(8, 'Hari Raya Idul Fitri 2', '2024-04-11', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(9, 'Hari Raya Waisak', '2024-05-23', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(10, 'Kenaikan Isa Almasih', '2024-05-09', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(11, 'Hari Raya Idul Adha', '2024-06-17', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(12, 'Tahun Baru Islam', '2024-07-07', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(13, 'Maulid Nabi Muhammad', '2024-09-15', 0, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(14, 'Hari Natal', '2024-12-25', 1, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `leave_type_id` bigint(20) UNSIGNED NOT NULL,
  `leave_title` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `duration_days` int(11) NOT NULL,
  `reason` text DEFAULT NULL,
  `proof_path` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `approved_by` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_balances`
--

CREATE TABLE `leave_balances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `leave_type_id` bigint(20) UNSIGNED NOT NULL,
  `total_days` int(11) NOT NULL DEFAULT 0,
  `used_days` int(11) NOT NULL DEFAULT 0,
  `remaining_days` int(11) GENERATED ALWAYS AS (`total_days` - `used_days`) VIRTUAL,
  `year` year(4) NOT NULL DEFAULT 2025,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_balances`
--

INSERT INTO `leave_balances` (`id`, `user_id`, `leave_type_id`, `total_days`, `used_days`, `year`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 12, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 1, 2, 10, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 2, 1, 12, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 2, 2, 10, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 3, 1, 12, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 3, 2, 10, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 4, 1, 12, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(8, 4, 2, 10, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(9, 5, 1, 12, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(10, 5, 2, 10, 3, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(11, 6, 1, 12, 3, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(12, 6, 2, 10, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(13, 7, 1, 12, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(14, 7, 2, 10, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(15, 8, 1, 12, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(16, 8, 2, 10, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(17, 9, 1, 12, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(18, 9, 2, 10, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(19, 10, 1, 12, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(20, 10, 2, 10, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(21, 11, 1, 12, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(22, 11, 2, 10, 2, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(23, 12, 1, 12, 0, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(24, 12, 2, 10, 1, '2025', '2025-12-22 08:43:16', '2025-12-22 08:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `leave_types`
--

CREATE TABLE `leave_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `requires_balance` tinyint(1) NOT NULL DEFAULT 1,
  `default_days` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_types`
--

INSERT INTO `leave_types` (`id`, `name`, `display_name`, `requires_balance`, `default_days`, `created_at`, `updated_at`) VALUES
(1, 'annual', 'Cuti Tahunan', 1, 12, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 'sick', 'Cuti Sakit', 1, 10, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 'emergency', 'Cuti Darurat', 0, 0, '2025-12-22 08:43:16', '2025-12-22 08:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_accounts_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_10_03_025741_create_personal_access_tokens_table', 1),
(5, '2025_10_03_031645_create_permission_tables', 1),
(6, '2025_10_10_031940_create_users_table', 1),
(7, '2025_10_15_064554_create_attendances_table', 1),
(8, '2025_10_15_064621_create_attendance_reasons_table', 1),
(9, '2025_11_12_101949_create_leave_types_table', 1),
(10, '2025_11_12_101949_create_leaves_table', 1),
(11, '2025_11_12_101950_create_leave_balances_table', 1),
(12, '2025_11_12_144519_create_holidays_table', 1),
(13, '2025_11_17_085515_create_division_tables', 1),
(14, '2025_11_17_095807_create_shifts_table', 1),
(15, '2025_11_19_090843_add_division_and_team_id_to_users', 1),
(16, '2025_11_24_133108_create_working_days_table', 1),
(17, '2025_11_24_133250_create_working_days_pivot_tables', 1),
(18, '2025_11_25_102332_create_file_uploads_table', 1),
(19, '2025_12_09_142615_create_overtimes_table', 1),
(20, '2025_12_10_104834_make_document_tables', 1),
(21, '2025_12_17_102902_create_base_salaries_table', 1),
(22, '2025_12_17_102907_create_salaries_table', 1),
(23, '2025_12_17_102920_create_salaries_items_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\Account', 3),
(1, 'App\\Models\\Account', 4),
(1, 'App\\Models\\Account', 11),
(1, 'App\\Models\\Account', 15),
(1, 'App\\Models\\Account', 18),
(1, 'App\\Models\\Account', 33),
(1, 'App\\Models\\Account', 41),
(1, 'App\\Models\\Account', 44),
(1, 'App\\Models\\Account', 55),
(1, 'App\\Models\\Account', 67),
(1, 'App\\Models\\Account', 70),
(1, 'App\\Models\\Account', 73),
(1, 'App\\Models\\Account', 79),
(1, 'App\\Models\\Account', 81),
(1, 'App\\Models\\Account', 97),
(2, 'App\\Models\\Account', 2),
(2, 'App\\Models\\Account', 13),
(2, 'App\\Models\\Account', 29),
(2, 'App\\Models\\Account', 42),
(2, 'App\\Models\\Account', 47),
(2, 'App\\Models\\Account', 48),
(2, 'App\\Models\\Account', 58),
(2, 'App\\Models\\Account', 76),
(2, 'App\\Models\\Account', 79),
(2, 'App\\Models\\Account', 85),
(2, 'App\\Models\\Account', 87),
(2, 'App\\Models\\Account', 88),
(2, 'App\\Models\\Account', 90),
(2, 'App\\Models\\Account', 97),
(2, 'App\\Models\\Account', 98),
(2, 'App\\Models\\Account', 99),
(2, 'App\\Models\\Account', 100),
(3, 'App\\Models\\Account', 6),
(3, 'App\\Models\\Account', 12),
(3, 'App\\Models\\Account', 14),
(3, 'App\\Models\\Account', 22),
(3, 'App\\Models\\Account', 26),
(3, 'App\\Models\\Account', 32),
(3, 'App\\Models\\Account', 35),
(3, 'App\\Models\\Account', 37),
(3, 'App\\Models\\Account', 38),
(3, 'App\\Models\\Account', 45),
(3, 'App\\Models\\Account', 51),
(3, 'App\\Models\\Account', 61),
(3, 'App\\Models\\Account', 63),
(3, 'App\\Models\\Account', 66),
(3, 'App\\Models\\Account', 67),
(3, 'App\\Models\\Account', 75),
(3, 'App\\Models\\Account', 84),
(4, 'App\\Models\\Account', 7),
(4, 'App\\Models\\Account', 12),
(4, 'App\\Models\\Account', 13),
(4, 'App\\Models\\Account', 21),
(4, 'App\\Models\\Account', 22),
(4, 'App\\Models\\Account', 25),
(4, 'App\\Models\\Account', 27),
(4, 'App\\Models\\Account', 34),
(4, 'App\\Models\\Account', 40),
(4, 'App\\Models\\Account', 43),
(4, 'App\\Models\\Account', 53),
(4, 'App\\Models\\Account', 59),
(4, 'App\\Models\\Account', 61),
(4, 'App\\Models\\Account', 68),
(4, 'App\\Models\\Account', 74),
(4, 'App\\Models\\Account', 77),
(4, 'App\\Models\\Account', 78),
(4, 'App\\Models\\Account', 82),
(4, 'App\\Models\\Account', 83),
(4, 'App\\Models\\Account', 87),
(4, 'App\\Models\\Account', 92),
(4, 'App\\Models\\Account', 93),
(4, 'App\\Models\\Account', 101),
(5, 'App\\Models\\Account', 5),
(5, 'App\\Models\\Account', 6),
(5, 'App\\Models\\Account', 7),
(5, 'App\\Models\\Account', 8),
(5, 'App\\Models\\Account', 10),
(5, 'App\\Models\\Account', 15),
(5, 'App\\Models\\Account', 16),
(5, 'App\\Models\\Account', 18),
(5, 'App\\Models\\Account', 19),
(5, 'App\\Models\\Account', 20),
(5, 'App\\Models\\Account', 24),
(5, 'App\\Models\\Account', 28),
(5, 'App\\Models\\Account', 30),
(5, 'App\\Models\\Account', 31),
(5, 'App\\Models\\Account', 35),
(5, 'App\\Models\\Account', 39),
(5, 'App\\Models\\Account', 41),
(5, 'App\\Models\\Account', 48),
(5, 'App\\Models\\Account', 54),
(5, 'App\\Models\\Account', 57),
(5, 'App\\Models\\Account', 60),
(5, 'App\\Models\\Account', 63),
(5, 'App\\Models\\Account', 65),
(5, 'App\\Models\\Account', 71),
(5, 'App\\Models\\Account', 78),
(5, 'App\\Models\\Account', 85),
(5, 'App\\Models\\Account', 86),
(5, 'App\\Models\\Account', 94),
(5, 'App\\Models\\Account', 95),
(5, 'App\\Models\\Account', 96),
(6, 'App\\Models\\Account', 1),
(6, 'App\\Models\\Account', 9),
(6, 'App\\Models\\Account', 17),
(6, 'App\\Models\\Account', 21),
(6, 'App\\Models\\Account', 23),
(6, 'App\\Models\\Account', 36),
(6, 'App\\Models\\Account', 40),
(6, 'App\\Models\\Account', 46),
(6, 'App\\Models\\Account', 49),
(6, 'App\\Models\\Account', 50),
(6, 'App\\Models\\Account', 52),
(6, 'App\\Models\\Account', 56),
(6, 'App\\Models\\Account', 57),
(6, 'App\\Models\\Account', 58),
(6, 'App\\Models\\Account', 62),
(6, 'App\\Models\\Account', 64),
(6, 'App\\Models\\Account', 69),
(6, 'App\\Models\\Account', 72),
(6, 'App\\Models\\Account', 80),
(6, 'App\\Models\\Account', 82),
(6, 'App\\Models\\Account', 89),
(6, 'App\\Models\\Account', 91),
(6, 'App\\Models\\Account', 95);

-- --------------------------------------------------------

--
-- Table structure for table `overtimes`
--

CREATE TABLE `overtimes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` bigint(20) UNSIGNED DEFAULT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `reason` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `approved_by` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'account.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(2, 'account.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(3, 'account.email:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(4, 'account.email:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(5, 'account.password:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(6, 'account.password:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(7, 'account.is_active:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(8, 'account.is_active:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(9, 'account.email_verified_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(10, 'account.email_verified_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(11, 'attendance.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(12, 'attendance.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(13, 'attendance.type:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(14, 'attendance.type:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(15, 'attendance.timestamp:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(16, 'attendance.timestamp:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(17, 'attendance.latitude:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(18, 'attendance.latitude:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(19, 'attendance.longitude:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(20, 'attendance.longitude:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(21, 'attendance.photo_path:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(22, 'attendance.photo_path:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(23, 'attendance.is_late:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(24, 'attendance.is_late:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(25, 'attendance.status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(26, 'attendance.status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(27, 'attendance.irregular_clockout:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(28, 'attendance.irregular_clockout:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(29, 'attendance.reviewed_by:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(30, 'attendance.reviewed_by:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(31, 'attendance.reviewed_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(32, 'attendance.reviewed_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(33, 'attendance.reason:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(34, 'attendance.reason:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(35, 'attendance_reason.attendance_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(36, 'attendance_reason.attendance_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(37, 'attendance_reason.reason_type:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(38, 'attendance_reason.reason_type:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(39, 'attendance_reason.description:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(40, 'attendance_reason.description:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(41, 'attendance_reason.photo_path:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(42, 'attendance_reason.photo_path:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(43, 'attendance_reason.review_status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(44, 'attendance_reason.review_status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(45, 'attendance_reason.reviewed_by:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(46, 'attendance_reason.reviewed_by:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(47, 'attendance_reason.reviewed_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(48, 'attendance_reason.reviewed_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(49, 'base_salary.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(50, 'base_salary.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(51, 'base_salary.base_salary:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(52, 'base_salary.base_salary:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(53, 'division.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(54, 'division.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(55, 'division.head_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(56, 'division.head_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(57, 'document.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(58, 'document.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(59, 'document.document_type_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(60, 'document.document_type_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(61, 'document.document_number:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(62, 'document.document_number:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(63, 'document.file_path:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(64, 'document.file_path:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(65, 'document.issued_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(66, 'document.issued_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(67, 'document.expired_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(68, 'document.expired_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(69, 'document.meta:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(70, 'document.meta:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(71, 'document_type.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(72, 'document_type.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(73, 'document_type.category:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(74, 'document_type.category:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(75, 'document_type.required:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(76, 'document_type.required:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(77, 'document_type.expires:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(78, 'document_type.expires:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(79, 'document_type.has_number:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(80, 'document_type.has_number:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(81, 'document_type.has_file:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(82, 'document_type.has_file:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(83, 'document_type.meta_schema:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(84, 'document_type.meta_schema:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(85, 'holiday.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(86, 'holiday.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(87, 'holiday.date:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(88, 'holiday.date:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(89, 'holiday.is_recurring:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(90, 'holiday.is_recurring:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(91, 'holiday.description:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(92, 'holiday.description:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(93, 'leave.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(94, 'leave.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(95, 'leave.leave_type_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(96, 'leave.leave_type_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(97, 'leave.leave_title:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(98, 'leave.leave_title:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(99, 'leave.start_date:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(100, 'leave.start_date:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(101, 'leave.end_date:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(102, 'leave.end_date:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(103, 'leave.duration_days:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(104, 'leave.duration_days:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(105, 'leave.reason:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(106, 'leave.reason:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(107, 'leave.proof_path:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(108, 'leave.proof_path:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(109, 'leave.status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(110, 'leave.status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(111, 'leave.approved_by:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(112, 'leave.approved_by:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(113, 'leave_balance.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(114, 'leave_balance.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(115, 'leave_balance.leave_type:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(116, 'leave_balance.leave_type:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(117, 'leave_balance.leave_type_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(118, 'leave_balance.leave_type_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(119, 'leave_balance.total_days:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(120, 'leave_balance.total_days:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(121, 'leave_balance.used_days:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(122, 'leave_balance.used_days:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(123, 'leave_balance.year:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(124, 'leave_balance.year:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(125, 'leave_type.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(126, 'leave_type.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(127, 'leave_type.display_name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(128, 'leave_type.display_name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(129, 'leave_type.requires_balance:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(130, 'leave_type.requires_balance:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(131, 'leave_type.default_days:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(132, 'leave_type.default_days:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(133, 'overtime.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(134, 'overtime.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(135, 'overtime.shift_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(136, 'overtime.shift_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(137, 'overtime.date:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(138, 'overtime.date:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(139, 'overtime.start_time:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(140, 'overtime.start_time:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(141, 'overtime.end_time:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(142, 'overtime.end_time:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(143, 'overtime.reason:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(144, 'overtime.reason:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(145, 'overtime.status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(146, 'overtime.status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(147, 'overtime.approved_by:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(148, 'overtime.approved_by:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(149, 'permission.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(150, 'permission.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(151, 'role.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(152, 'role.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(153, 'salary.user_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(154, 'salary.user_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(155, 'salary.period:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(156, 'salary.period:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(157, 'salary.period_start:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(158, 'salary.period_start:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(159, 'salary.period_end:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(160, 'salary.period_end:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(161, 'salary.base_salary:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(162, 'salary.base_salary:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(163, 'salary.total_allowance:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(164, 'salary.total_allowance:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(165, 'salary.total_deduction:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(166, 'salary.total_deduction:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(167, 'salary.net_salary:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(168, 'salary.net_salary:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(169, 'salary.status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(170, 'salary.status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(171, 'salary.notes:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(172, 'salary.notes:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(173, 'salary_item.salary_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(174, 'salary_item.salary_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(175, 'salary_item.type:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(176, 'salary_item.type:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(177, 'salary_item.label:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(178, 'salary_item.label:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(179, 'salary_item.amount:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(180, 'salary_item.amount:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(181, 'shift.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(182, 'shift.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(183, 'shift.description:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(184, 'shift.description:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(185, 'shift.start_time:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(186, 'shift.start_time:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(187, 'shift.end_time:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(188, 'shift.end_time:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(189, 'shift.clock_in_start:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(190, 'shift.clock_in_start:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(191, 'shift.clock_in_end:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(192, 'shift.clock_in_end:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(193, 'shift.clock_out_start:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(194, 'shift.clock_out_start:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(195, 'shift.clock_out_end:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(196, 'shift.clock_out_end:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(197, 'shift.type:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(198, 'shift.type:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(199, 'shift.effective_start:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(200, 'shift.effective_start:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(201, 'shift.effective_end:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(202, 'shift.effective_end:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(203, 'shift.is_default:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(204, 'shift.is_default:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(205, 'shift.is_active:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(206, 'shift.is_active:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(207, 'team.division_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(208, 'team.division_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(209, 'team.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(210, 'team.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(211, 'team.lead_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(212, 'team.lead_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(213, 'user.account_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(214, 'user.account_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(215, 'user.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(216, 'user.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(217, 'user.nik:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(218, 'user.nik:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(219, 'user.phone:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(220, 'user.phone:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(221, 'user.address:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(222, 'user.address:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(223, 'user.gender:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(224, 'user.gender:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(225, 'user.birth_place:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(226, 'user.birth_place:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(227, 'user.birth_date:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(228, 'user.birth_date:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(229, 'user.position:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(230, 'user.position:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(231, 'user.division_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(232, 'user.division_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(233, 'user.team_id:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(234, 'user.team_id:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(235, 'user.hired_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(236, 'user.hired_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(237, 'user.employment_status:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(238, 'user.employment_status:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(239, 'user.resigned_at:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(240, 'user.resigned_at:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(241, 'user.profile_pic:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(242, 'user.profile_pic:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(243, 'working_days.name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(244, 'working_days.name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(245, 'working_days.display_name:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(246, 'working_days.display_name:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(247, 'working_days.days_of_week:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(248, 'working_days.days_of_week:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(249, 'working_days.description:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(250, 'working_days.description:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(251, 'working_days.is_default:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(252, 'working_days.is_default:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(253, 'working_days.is_active:read', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(254, 'working_days.is_active:write', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(255, 'account:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(256, 'account:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(257, 'account:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(258, 'account:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(259, 'account:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(260, 'account:assign_role', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(261, 'account:unassign_role', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(262, 'account:assign_permission', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(263, 'account:unassign_permission', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(264, 'role:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(265, 'role:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(266, 'role:bulk-edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(267, 'role:bulk-delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(268, 'role:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(269, 'role:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(270, 'role:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(271, 'division:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(272, 'division:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(273, 'division:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(274, 'division:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(275, 'division:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(276, 'team:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(277, 'team:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(278, 'team:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(279, 'team:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(280, 'team:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(281, 'user:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(282, 'user:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(283, 'user:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(284, 'user:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(285, 'user:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(286, 'base-salary:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(287, 'base-salary:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(288, 'base-salary:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(289, 'base-salary:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(290, 'salary:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(291, 'salary:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(292, 'salary:report', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(293, 'salary:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(294, 'salary:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(295, 'salary:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(296, 'salary:finalize', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(297, 'salary:download', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(298, 'salary-item:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(299, 'salary-item:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(300, 'attendance:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(301, 'attendance:clock_in', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(302, 'attendance:clock_out', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(303, 'attendance:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(304, 'attendance:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(305, 'attendance:review', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(306, 'attendance:view_photo', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(307, 'attendance_reason:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(308, 'attendance_reason:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(309, 'attendance_reason:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(310, 'attendance_reason:review', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(311, 'leave:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(312, 'leave:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(313, 'leave:preview', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(314, 'leave:summary', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(315, 'leave-type:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(316, 'leave-type:with-balance', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(317, 'leave-type:without-balance', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(318, 'leave-type:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(319, 'leave-type:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(320, 'leave-type:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(321, 'leave-type:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(322, 'leave-balance:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(323, 'leave-balance:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(324, 'leave-balance:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(325, 'leave-balance:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(326, 'leave-balance:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(327, 'leave:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(328, 'leave:cancel', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(329, 'leave:approve', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(330, 'leave:reject', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(331, 'leave:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(332, 'leave:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(333, 'shift:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(334, 'shift:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(335, 'shift:view-my', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(336, 'shift:view-unassigned', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(337, 'shift:bulk-unassign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(338, 'overtime:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(339, 'overtime:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(340, 'overtime:approve', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(341, 'overtime:reject', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(342, 'overtime:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(343, 'overtime:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(344, 'shift:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(345, 'shift:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(346, 'shift:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(347, 'shift:view-assigned', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(348, 'shift:view-summary', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(349, 'shift:bulk-assign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(350, 'shift:assign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(351, 'shift:unassign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(352, 'shift:change', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(353, 'working-days:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(354, 'working-days:view-my', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(355, 'working-days:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(356, 'working-days:bulk-assign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(357, 'working-days:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(358, 'working-days:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(359, 'working-days:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(360, 'working-days:assign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(361, 'working-days:unassign', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(362, 'document:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(363, 'document:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(364, 'document-type:view', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(365, 'document-type:create', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(366, 'document-type:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(367, 'document-type:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(368, 'document-type:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(369, 'document:show', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(370, 'document:edit', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(371, 'document:delete', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(372, 'document:download', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(51, 'App\\Models\\Account', 1, 'access-token', '9a4547ce95beddf96292d6e42c88c90534a30816e9a154d35b8a82870b02de5c', '[\"access\"]', '2026-01-14 08:39:03', NULL, '2026-01-14 08:26:17', '2026-01-14 08:39:03'),
(52, 'App\\Models\\Account', 1, 'refresh-token', '31eee9289e1e64c3d682f26a7d52f2f4c299368cb9ec486c2c4af8d4c4fd66a7', '[\"refresh\"]', NULL, '2026-01-15 08:26:17', '2026-01-14 08:26:17', '2026-01-14 08:26:17');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'executive', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(2, 'hr-manager', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(3, 'hr-staff', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(4, 'manager', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(5, 'employee', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(6, 'super-admin', 'sanctum', '2025-12-22 08:42:56', '2025-12-22 08:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 6),
(2, 1),
(2, 6),
(3, 1),
(3, 6),
(4, 1),
(4, 6),
(5, 1),
(5, 6),
(6, 1),
(6, 6),
(7, 1),
(7, 6),
(8, 1),
(8, 6),
(9, 1),
(9, 6),
(10, 1),
(10, 6),
(11, 1),
(11, 5),
(11, 6),
(12, 1),
(12, 5),
(12, 6),
(13, 1),
(13, 5),
(13, 6),
(14, 1),
(14, 5),
(14, 6),
(15, 1),
(15, 5),
(15, 6),
(16, 1),
(16, 5),
(16, 6),
(17, 1),
(17, 5),
(17, 6),
(18, 1),
(18, 5),
(18, 6),
(19, 1),
(19, 5),
(19, 6),
(20, 1),
(20, 5),
(20, 6),
(21, 1),
(21, 5),
(21, 6),
(22, 1),
(22, 5),
(22, 6),
(23, 1),
(23, 5),
(23, 6),
(24, 1),
(24, 5),
(24, 6),
(25, 1),
(25, 5),
(25, 6),
(26, 1),
(26, 5),
(26, 6),
(27, 1),
(27, 5),
(27, 6),
(28, 1),
(28, 5),
(28, 6),
(29, 1),
(29, 5),
(29, 6),
(30, 1),
(30, 5),
(30, 6),
(31, 1),
(31, 5),
(31, 6),
(32, 1),
(32, 5),
(32, 6),
(33, 1),
(33, 5),
(33, 6),
(34, 1),
(34, 5),
(34, 6),
(35, 1),
(35, 5),
(35, 6),
(36, 1),
(36, 5),
(36, 6),
(37, 1),
(37, 5),
(37, 6),
(38, 1),
(38, 5),
(38, 6),
(39, 1),
(39, 5),
(39, 6),
(40, 1),
(40, 5),
(40, 6),
(41, 1),
(41, 5),
(41, 6),
(42, 1),
(42, 5),
(42, 6),
(43, 1),
(43, 5),
(43, 6),
(44, 1),
(44, 5),
(44, 6),
(45, 1),
(45, 5),
(45, 6),
(46, 1),
(46, 5),
(46, 6),
(47, 1),
(47, 5),
(47, 6),
(48, 1),
(48, 5),
(48, 6),
(49, 1),
(49, 6),
(50, 1),
(50, 6),
(51, 1),
(51, 6),
(52, 1),
(52, 6),
(53, 1),
(53, 4),
(53, 6),
(54, 1),
(54, 4),
(54, 6),
(55, 1),
(55, 4),
(55, 6),
(56, 1),
(56, 4),
(56, 6),
(57, 1),
(57, 6),
(58, 1),
(58, 6),
(59, 1),
(59, 6),
(60, 1),
(60, 6),
(61, 1),
(61, 6),
(62, 1),
(62, 6),
(63, 1),
(63, 6),
(64, 1),
(64, 6),
(65, 1),
(65, 6),
(66, 1),
(66, 6),
(67, 1),
(67, 6),
(68, 1),
(68, 6),
(69, 1),
(69, 6),
(70, 1),
(70, 6),
(71, 1),
(71, 6),
(72, 1),
(72, 6),
(73, 1),
(73, 6),
(74, 1),
(74, 6),
(75, 1),
(75, 6),
(76, 1),
(76, 6),
(77, 1),
(77, 6),
(78, 1),
(78, 6),
(79, 1),
(79, 6),
(80, 1),
(80, 6),
(81, 1),
(81, 6),
(82, 1),
(82, 6),
(83, 1),
(83, 6),
(84, 1),
(84, 6),
(85, 1),
(85, 6),
(86, 1),
(86, 6),
(87, 1),
(87, 6),
(88, 1),
(88, 6),
(89, 1),
(89, 6),
(90, 1),
(90, 6),
(91, 1),
(91, 6),
(92, 1),
(92, 6),
(93, 1),
(93, 6),
(94, 1),
(94, 6),
(95, 1),
(95, 6),
(96, 1),
(96, 6),
(97, 1),
(97, 6),
(98, 1),
(98, 6),
(99, 1),
(99, 6),
(100, 1),
(100, 6),
(101, 1),
(101, 6),
(102, 1),
(102, 6),
(103, 1),
(103, 6),
(104, 1),
(104, 6),
(105, 1),
(105, 6),
(106, 1),
(106, 6),
(107, 1),
(107, 6),
(108, 1),
(108, 6),
(109, 1),
(109, 6),
(110, 1),
(110, 6),
(111, 1),
(111, 6),
(112, 1),
(112, 6),
(113, 1),
(113, 6),
(114, 1),
(114, 6),
(115, 1),
(115, 6),
(116, 1),
(116, 6),
(117, 1),
(117, 6),
(118, 1),
(118, 6),
(119, 1),
(119, 6),
(120, 1),
(120, 6),
(121, 1),
(121, 6),
(122, 1),
(122, 6),
(123, 1),
(123, 6),
(124, 1),
(124, 6),
(125, 1),
(125, 6),
(126, 1),
(126, 6),
(127, 1),
(127, 6),
(128, 1),
(128, 6),
(129, 1),
(129, 6),
(130, 1),
(130, 6),
(131, 1),
(131, 6),
(132, 1),
(132, 6),
(133, 1),
(133, 6),
(134, 1),
(134, 6),
(135, 1),
(135, 6),
(136, 1),
(136, 6),
(137, 1),
(137, 6),
(138, 1),
(138, 6),
(139, 1),
(139, 6),
(140, 1),
(140, 6),
(141, 1),
(141, 6),
(142, 1),
(142, 6),
(143, 1),
(143, 6),
(144, 1),
(144, 6),
(145, 1),
(145, 6),
(146, 1),
(146, 6),
(147, 1),
(147, 6),
(148, 1),
(148, 6),
(149, 1),
(149, 6),
(150, 1),
(150, 6),
(151, 1),
(151, 6),
(152, 1),
(152, 6),
(153, 1),
(153, 6),
(154, 1),
(154, 6),
(155, 1),
(155, 6),
(156, 1),
(156, 6),
(157, 1),
(157, 6),
(158, 1),
(158, 6),
(159, 1),
(159, 6),
(160, 1),
(160, 6),
(161, 1),
(161, 6),
(162, 1),
(162, 6),
(163, 1),
(163, 6),
(164, 1),
(164, 6),
(165, 1),
(165, 6),
(166, 1),
(166, 6),
(167, 1),
(167, 6),
(168, 1),
(168, 6),
(169, 1),
(169, 6),
(170, 1),
(170, 6),
(171, 1),
(171, 6),
(172, 1),
(172, 6),
(173, 1),
(173, 6),
(174, 1),
(174, 6),
(175, 1),
(175, 6),
(176, 1),
(176, 6),
(177, 1),
(177, 6),
(178, 1),
(178, 6),
(179, 1),
(179, 6),
(180, 1),
(180, 6),
(181, 1),
(181, 6),
(182, 1),
(182, 6),
(183, 1),
(183, 6),
(184, 1),
(184, 6),
(185, 1),
(185, 6),
(186, 1),
(186, 6),
(187, 1),
(187, 6),
(188, 1),
(188, 6),
(189, 1),
(189, 6),
(190, 1),
(190, 6),
(191, 1),
(191, 6),
(192, 1),
(192, 6),
(193, 1),
(193, 6),
(194, 1),
(194, 6),
(195, 1),
(195, 6),
(196, 1),
(196, 6),
(197, 1),
(197, 6),
(198, 1),
(198, 6),
(199, 1),
(199, 6),
(200, 1),
(200, 6),
(201, 1),
(201, 6),
(202, 1),
(202, 6),
(203, 1),
(203, 6),
(204, 1),
(204, 6),
(205, 1),
(205, 6),
(206, 1),
(206, 6),
(207, 1),
(207, 4),
(207, 6),
(208, 1),
(208, 4),
(208, 6),
(209, 1),
(209, 4),
(209, 6),
(210, 1),
(210, 4),
(210, 6),
(211, 1),
(211, 4),
(211, 6),
(212, 1),
(212, 4),
(212, 6),
(213, 1),
(213, 4),
(213, 5),
(213, 6),
(214, 1),
(214, 4),
(214, 5),
(214, 6),
(215, 1),
(215, 4),
(215, 5),
(215, 6),
(216, 1),
(216, 4),
(216, 5),
(216, 6),
(217, 1),
(217, 4),
(217, 5),
(217, 6),
(218, 1),
(218, 4),
(218, 5),
(218, 6),
(219, 1),
(219, 4),
(219, 5),
(219, 6),
(220, 1),
(220, 4),
(220, 5),
(220, 6),
(221, 1),
(221, 4),
(221, 5),
(221, 6),
(222, 1),
(222, 4),
(222, 5),
(222, 6),
(223, 1),
(223, 4),
(223, 5),
(223, 6),
(224, 1),
(224, 4),
(224, 5),
(224, 6),
(225, 1),
(225, 4),
(225, 5),
(225, 6),
(226, 1),
(226, 4),
(226, 5),
(226, 6),
(227, 1),
(227, 4),
(227, 5),
(227, 6),
(228, 1),
(228, 4),
(228, 5),
(228, 6),
(229, 1),
(229, 4),
(229, 5),
(229, 6),
(230, 1),
(230, 4),
(230, 5),
(230, 6),
(231, 1),
(231, 4),
(231, 5),
(231, 6),
(232, 1),
(232, 4),
(232, 5),
(232, 6),
(233, 1),
(233, 4),
(233, 5),
(233, 6),
(234, 1),
(234, 4),
(234, 5),
(234, 6),
(235, 1),
(235, 4),
(235, 5),
(235, 6),
(236, 1),
(236, 4),
(236, 5),
(236, 6),
(237, 1),
(237, 4),
(237, 5),
(237, 6),
(238, 1),
(238, 4),
(238, 5),
(238, 6),
(239, 1),
(239, 4),
(239, 5),
(239, 6),
(240, 1),
(240, 4),
(240, 5),
(240, 6),
(241, 1),
(241, 4),
(241, 5),
(241, 6),
(242, 1),
(242, 4),
(242, 5),
(242, 6),
(243, 1),
(243, 6),
(244, 1),
(244, 6),
(245, 1),
(245, 6),
(246, 1),
(246, 6),
(247, 1),
(247, 6),
(248, 1),
(248, 6),
(249, 1),
(249, 6),
(250, 1),
(250, 6),
(251, 1),
(251, 6),
(252, 1),
(252, 6),
(253, 1),
(253, 6),
(254, 1),
(254, 6),
(255, 1),
(255, 6),
(256, 1),
(256, 6),
(257, 1),
(257, 6),
(258, 1),
(258, 6),
(259, 1),
(259, 6),
(260, 1),
(260, 6),
(261, 1),
(261, 6),
(262, 1),
(262, 6),
(263, 1),
(263, 6),
(264, 1),
(264, 6),
(265, 1),
(265, 6),
(266, 1),
(266, 6),
(267, 1),
(267, 6),
(268, 1),
(268, 6),
(269, 1),
(269, 6),
(270, 1),
(270, 6),
(271, 1),
(271, 4),
(271, 6),
(272, 1),
(272, 4),
(272, 6),
(273, 1),
(273, 4),
(273, 6),
(274, 1),
(274, 4),
(274, 6),
(275, 1),
(275, 4),
(275, 6),
(276, 1),
(276, 4),
(276, 6),
(277, 1),
(277, 4),
(277, 6),
(278, 1),
(278, 4),
(278, 6),
(279, 1),
(279, 4),
(279, 6),
(280, 1),
(280, 4),
(280, 6),
(281, 1),
(281, 4),
(281, 5),
(281, 6),
(282, 1),
(282, 4),
(282, 5),
(282, 6),
(283, 1),
(283, 4),
(283, 5),
(283, 6),
(284, 1),
(284, 4),
(284, 5),
(284, 6),
(285, 1),
(285, 4),
(285, 5),
(285, 6),
(286, 1),
(286, 6),
(287, 1),
(287, 6),
(288, 1),
(288, 6),
(289, 1),
(289, 6),
(290, 1),
(290, 6),
(291, 1),
(291, 6),
(292, 1),
(292, 6),
(293, 1),
(293, 6),
(294, 1),
(294, 6),
(295, 1),
(295, 6),
(296, 1),
(296, 6),
(297, 1),
(297, 6),
(298, 1),
(298, 6),
(299, 1),
(299, 6),
(300, 1),
(300, 5),
(300, 6),
(301, 1),
(301, 5),
(301, 6),
(302, 1),
(302, 5),
(302, 6),
(303, 1),
(303, 5),
(303, 6),
(304, 1),
(304, 5),
(304, 6),
(305, 1),
(305, 5),
(305, 6),
(306, 1),
(306, 5),
(306, 6),
(307, 1),
(307, 5),
(307, 6),
(308, 1),
(308, 5),
(308, 6),
(309, 1),
(309, 5),
(309, 6),
(310, 1),
(310, 5),
(310, 6),
(311, 1),
(311, 6),
(312, 1),
(312, 6),
(313, 1),
(313, 6),
(314, 1),
(314, 6),
(315, 1),
(315, 6),
(316, 1),
(316, 6),
(317, 1),
(317, 6),
(318, 1),
(318, 6),
(319, 1),
(319, 6),
(320, 1),
(320, 6),
(321, 1),
(321, 6),
(322, 1),
(322, 6),
(323, 1),
(323, 6),
(324, 1),
(324, 6),
(325, 1),
(325, 6),
(326, 1),
(326, 6),
(327, 1),
(327, 6),
(328, 1),
(328, 6),
(329, 1),
(329, 6),
(330, 1),
(330, 6),
(331, 1),
(331, 6),
(332, 1),
(332, 6),
(333, 1),
(333, 6),
(334, 1),
(334, 6),
(335, 1),
(335, 6),
(336, 1),
(336, 6),
(337, 1),
(337, 6),
(338, 1),
(338, 6),
(339, 1),
(339, 6),
(340, 1),
(340, 6),
(341, 1),
(341, 6),
(342, 1),
(342, 6),
(343, 1),
(343, 6),
(344, 1),
(344, 6),
(345, 1),
(345, 6),
(346, 1),
(346, 6),
(347, 1),
(347, 6),
(348, 1),
(348, 6),
(349, 1),
(349, 6),
(350, 1),
(350, 6),
(351, 1),
(351, 6),
(352, 1),
(352, 6),
(353, 1),
(353, 6),
(354, 1),
(354, 6),
(355, 1),
(355, 6),
(356, 1),
(356, 6),
(357, 1),
(357, 6),
(358, 1),
(358, 6),
(359, 1),
(359, 6),
(360, 1),
(360, 6),
(361, 1),
(361, 6),
(362, 1),
(362, 6),
(363, 1),
(363, 6),
(364, 1),
(364, 6),
(365, 1),
(365, 6),
(366, 1),
(366, 6),
(367, 1),
(367, 6),
(368, 1),
(368, 6),
(369, 1),
(369, 6),
(370, 1),
(370, 6),
(371, 1),
(371, 6),
(372, 1),
(372, 6);

-- --------------------------------------------------------

--
-- Table structure for table `salaries`
--

CREATE TABLE `salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `period` varchar(255) NOT NULL,
  `period_start` date NOT NULL,
  `period_end` date NOT NULL,
  `base_salary` bigint(20) UNSIGNED NOT NULL,
  `status` enum('draft','final') NOT NULL DEFAULT 'draft',
  `total_allowance` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `total_deduction` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `net_salary` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salaries`
--

INSERT INTO `salaries` (`id`, `user_id`, `period`, `period_start`, `period_end`, `base_salary`, `status`, `total_allowance`, `total_deduction`, `net_salary`, `notes`, `created_at`, `updated_at`) VALUES
(1, 1, 'December 2025', '2025-12-01', '2025-12-31', 13000000, 'final', 500000, 100000, 13400000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 2, 'December 2025', '2025-12-01', '2025-12-31', 6700000, 'final', 500000, 50000, 7150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 3, 'December 2025', '2025-12-01', '2025-12-31', 8800000, 'final', 600000, 250000, 9150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 4, 'December 2025', '2025-12-01', '2025-12-31', 7000000, 'final', 1300000, 200000, 8100000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 5, 'December 2025', '2025-12-01', '2025-12-31', 7000000, 'final', 1100000, 50000, 8050000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 6, 'December 2025', '2025-12-01', '2025-12-31', 8200000, 'final', 1100000, 100000, 9200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 7, 'December 2025', '2025-12-01', '2025-12-31', 7800000, 'final', 600000, 150000, 8250000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(8, 8, 'December 2025', '2025-12-01', '2025-12-31', 14700000, 'final', 500000, 200000, 15000000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(9, 9, 'December 2025', '2025-12-01', '2025-12-31', 8300000, 'final', 1300000, 50000, 9550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(10, 10, 'December 2025', '2025-12-01', '2025-12-31', 9000000, 'final', 1500000, 250000, 10250000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(11, 11, 'December 2025', '2025-12-01', '2025-12-31', 5600000, 'final', 1200000, 150000, 6650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(12, 12, 'December 2025', '2025-12-01', '2025-12-31', 7800000, 'final', 600000, 250000, 8150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(13, 13, 'December 2025', '2025-12-01', '2025-12-31', 9000000, 'final', 1200000, 150000, 10050000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(14, 14, 'December 2025', '2025-12-01', '2025-12-31', 6400000, 'final', 600000, 200000, 6800000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(15, 15, 'December 2025', '2025-12-01', '2025-12-31', 5300000, 'final', 800000, 50000, 6050000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(16, 16, 'December 2025', '2025-12-01', '2025-12-31', 6200000, 'final', 500000, 250000, 6450000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(17, 17, 'December 2025', '2025-12-01', '2025-12-31', 6900000, 'final', 1200000, 250000, 7850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(18, 18, 'December 2025', '2025-12-01', '2025-12-31', 8500000, 'final', 800000, 100000, 9200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(19, 19, 'December 2025', '2025-12-01', '2025-12-31', 14800000, 'final', 1100000, 250000, 15650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(20, 20, 'December 2025', '2025-12-01', '2025-12-31', 11100000, 'final', 1400000, 200000, 12300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(21, 21, 'December 2025', '2025-12-01', '2025-12-31', 12200000, 'final', 1400000, 150000, 13450000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(22, 22, 'December 2025', '2025-12-01', '2025-12-31', 5000000, 'final', 900000, 100000, 5800000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(23, 23, 'December 2025', '2025-12-01', '2025-12-31', 7000000, 'final', 1300000, 200000, 8100000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(24, 24, 'December 2025', '2025-12-01', '2025-12-31', 11400000, 'final', 600000, 150000, 11850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(25, 25, 'December 2025', '2025-12-01', '2025-12-31', 14900000, 'final', 500000, 200000, 15200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(26, 26, 'December 2025', '2025-12-01', '2025-12-31', 8700000, 'final', 900000, 150000, 9450000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(27, 27, 'December 2025', '2025-12-01', '2025-12-31', 6100000, 'final', 700000, 150000, 6650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(28, 28, 'December 2025', '2025-12-01', '2025-12-31', 5400000, 'final', 500000, 200000, 5700000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(29, 29, 'December 2025', '2025-12-01', '2025-12-31', 5900000, 'final', 600000, 200000, 6300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(30, 30, 'December 2025', '2025-12-01', '2025-12-31', 7500000, 'final', 1000000, 200000, 8300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(31, 31, 'December 2025', '2025-12-01', '2025-12-31', 10500000, 'final', 1200000, 150000, 11550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(32, 32, 'December 2025', '2025-12-01', '2025-12-31', 8700000, 'final', 1300000, 100000, 9900000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(33, 33, 'December 2025', '2025-12-01', '2025-12-31', 11000000, 'final', 800000, 50000, 11750000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(34, 34, 'December 2025', '2025-12-01', '2025-12-31', 14700000, 'final', 500000, 200000, 15000000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(35, 35, 'December 2025', '2025-12-01', '2025-12-31', 13000000, 'final', 600000, 150000, 13450000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(36, 36, 'December 2025', '2025-12-01', '2025-12-31', 10800000, 'final', 1500000, 100000, 12200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(37, 37, 'December 2025', '2025-12-01', '2025-12-31', 5700000, 'final', 500000, 200000, 6000000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(38, 38, 'December 2025', '2025-12-01', '2025-12-31', 13500000, 'final', 1500000, 50000, 14950000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(39, 39, 'December 2025', '2025-12-01', '2025-12-31', 5800000, 'final', 500000, 150000, 6150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(40, 40, 'December 2025', '2025-12-01', '2025-12-31', 9000000, 'final', 700000, 200000, 9500000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(41, 41, 'December 2025', '2025-12-01', '2025-12-31', 8800000, 'final', 900000, 100000, 9600000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(42, 42, 'December 2025', '2025-12-01', '2025-12-31', 14700000, 'final', 900000, 50000, 15550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(43, 43, 'December 2025', '2025-12-01', '2025-12-31', 5700000, 'final', 500000, 150000, 6050000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(44, 44, 'December 2025', '2025-12-01', '2025-12-31', 5900000, 'final', 1100000, 100000, 6900000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(45, 45, 'December 2025', '2025-12-01', '2025-12-31', 10300000, 'final', 800000, 250000, 10850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(46, 46, 'December 2025', '2025-12-01', '2025-12-31', 10000000, 'final', 1500000, 100000, 11400000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(47, 47, 'December 2025', '2025-12-01', '2025-12-31', 15000000, 'final', 600000, 250000, 15350000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(48, 48, 'December 2025', '2025-12-01', '2025-12-31', 12300000, 'final', 500000, 100000, 12700000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(49, 49, 'December 2025', '2025-12-01', '2025-12-31', 10000000, 'final', 1000000, 150000, 10850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(50, 50, 'December 2025', '2025-12-01', '2025-12-31', 6200000, 'final', 900000, 50000, 7050000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(51, 51, 'December 2025', '2025-12-01', '2025-12-31', 5900000, 'final', 1000000, 150000, 6750000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(52, 52, 'December 2025', '2025-12-01', '2025-12-31', 10300000, 'final', 500000, 100000, 10700000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(53, 53, 'December 2025', '2025-12-01', '2025-12-31', 12000000, 'final', 600000, 200000, 12400000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(54, 54, 'December 2025', '2025-12-01', '2025-12-31', 7900000, 'final', 600000, 200000, 8300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(55, 55, 'December 2025', '2025-12-01', '2025-12-31', 6300000, 'final', 700000, 100000, 6900000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(56, 56, 'December 2025', '2025-12-01', '2025-12-31', 14900000, 'final', 1500000, 250000, 16150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(57, 57, 'December 2025', '2025-12-01', '2025-12-31', 14400000, 'final', 600000, 100000, 14900000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(58, 58, 'December 2025', '2025-12-01', '2025-12-31', 5000000, 'final', 1300000, 50000, 6250000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(59, 59, 'December 2025', '2025-12-01', '2025-12-31', 6200000, 'final', 600000, 150000, 6650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(60, 60, 'December 2025', '2025-12-01', '2025-12-31', 8100000, 'final', 1300000, 150000, 9250000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(61, 61, 'December 2025', '2025-12-01', '2025-12-31', 10200000, 'final', 500000, 100000, 10600000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(62, 62, 'December 2025', '2025-12-01', '2025-12-31', 8700000, 'final', 1500000, 50000, 10150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(63, 63, 'December 2025', '2025-12-01', '2025-12-31', 8300000, 'final', 600000, 250000, 8650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(64, 64, 'December 2025', '2025-12-01', '2025-12-31', 8700000, 'final', 1200000, 100000, 9800000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(65, 65, 'December 2025', '2025-12-01', '2025-12-31', 12100000, 'final', 1000000, 250000, 12850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(66, 66, 'December 2025', '2025-12-01', '2025-12-31', 5000000, 'final', 600000, 200000, 5400000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(67, 67, 'December 2025', '2025-12-01', '2025-12-31', 13000000, 'final', 1300000, 150000, 14150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(68, 68, 'December 2025', '2025-12-01', '2025-12-31', 7900000, 'final', 1300000, 200000, 9000000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(69, 69, 'December 2025', '2025-12-01', '2025-12-31', 13600000, 'final', 1400000, 200000, 14800000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(70, 70, 'December 2025', '2025-12-01', '2025-12-31', 12900000, 'final', 800000, 50000, 13650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(71, 71, 'December 2025', '2025-12-01', '2025-12-31', 8600000, 'final', 700000, 100000, 9200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(72, 72, 'December 2025', '2025-12-01', '2025-12-31', 9100000, 'final', 1500000, 50000, 10550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(73, 73, 'December 2025', '2025-12-01', '2025-12-31', 14900000, 'final', 600000, 200000, 15300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(74, 74, 'December 2025', '2025-12-01', '2025-12-31', 14100000, 'final', 600000, 100000, 14600000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(75, 75, 'December 2025', '2025-12-01', '2025-12-31', 14700000, 'final', 900000, 250000, 15350000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(76, 76, 'December 2025', '2025-12-01', '2025-12-31', 5000000, 'final', 1100000, 100000, 6000000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(77, 77, 'December 2025', '2025-12-01', '2025-12-31', 9000000, 'final', 700000, 200000, 9500000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(78, 78, 'December 2025', '2025-12-01', '2025-12-31', 15000000, 'final', 1400000, 250000, 16150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(79, 79, 'December 2025', '2025-12-01', '2025-12-31', 6400000, 'final', 1500000, 150000, 7750000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(80, 80, 'December 2025', '2025-12-01', '2025-12-31', 8700000, 'final', 1100000, 150000, 9650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(81, 81, 'December 2025', '2025-12-01', '2025-12-31', 11100000, 'final', 1200000, 150000, 12150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(82, 82, 'December 2025', '2025-12-01', '2025-12-31', 5300000, 'final', 600000, 100000, 5800000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(83, 83, 'December 2025', '2025-12-01', '2025-12-31', 13200000, 'final', 1500000, 200000, 14500000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(84, 84, 'December 2025', '2025-12-01', '2025-12-31', 6700000, 'final', 600000, 100000, 7200000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(85, 85, 'December 2025', '2025-12-01', '2025-12-31', 9100000, 'final', 900000, 150000, 9850000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(86, 86, 'December 2025', '2025-12-01', '2025-12-31', 9900000, 'final', 800000, 150000, 10550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(87, 87, 'December 2025', '2025-12-01', '2025-12-31', 6500000, 'final', 1100000, 50000, 7550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(88, 88, 'December 2025', '2025-12-01', '2025-12-31', 15000000, 'final', 800000, 150000, 15650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(89, 89, 'December 2025', '2025-12-01', '2025-12-31', 8900000, 'final', 600000, 250000, 9250000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(90, 90, 'December 2025', '2025-12-01', '2025-12-31', 11600000, 'final', 1100000, 250000, 12450000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(91, 91, 'December 2025', '2025-12-01', '2025-12-31', 13200000, 'final', 1500000, 100000, 14600000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(92, 92, 'December 2025', '2025-12-01', '2025-12-31', 14300000, 'final', 1000000, 200000, 15100000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(93, 93, 'December 2025', '2025-12-01', '2025-12-31', 7000000, 'final', 800000, 250000, 7550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(94, 94, 'December 2025', '2025-12-01', '2025-12-31', 6900000, 'final', 500000, 250000, 7150000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(95, 95, 'December 2025', '2025-12-01', '2025-12-31', 5500000, 'final', 500000, 50000, 5950000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(96, 96, 'December 2025', '2025-12-01', '2025-12-31', 13900000, 'final', 800000, 50000, 14650000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(97, 97, 'December 2025', '2025-12-01', '2025-12-31', 8900000, 'final', 600000, 200000, 9300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(98, 98, 'December 2025', '2025-12-01', '2025-12-31', 13900000, 'final', 1200000, 200000, 14900000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(99, 99, 'December 2025', '2025-12-01', '2025-12-31', 12900000, 'final', 600000, 200000, 13300000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(100, 100, 'December 2025', '2025-12-01', '2025-12-31', 8900000, 'final', 1500000, 50000, 10350000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(101, 101, 'December 2025', '2025-12-01', '2025-12-31', 10100000, 'final', 500000, 50000, 10550000, 'Gaji Bulanan Otomatis dari Seeder', '2025-12-22 08:43:17', '2025-12-22 08:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `salary_items`
--

CREATE TABLE `salary_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salary_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('allowance','deduction') NOT NULL,
  `label` varchar(255) NOT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salary_items`
--

INSERT INTO `salary_items` (`id`, `salary_id`, `type`, `label`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 1, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 2, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 2, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 3, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 3, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 4, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(8, 4, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(9, 5, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(10, 5, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(11, 6, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(12, 6, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(13, 7, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(14, 7, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(15, 8, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(16, 8, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(17, 9, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(18, 9, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(19, 10, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(20, 10, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(21, 11, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(22, 11, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(23, 12, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(24, 12, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(25, 13, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(26, 13, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(27, 14, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(28, 14, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(29, 15, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(30, 15, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(31, 16, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(32, 16, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(33, 17, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(34, 17, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(35, 18, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(36, 18, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(37, 19, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(38, 19, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(39, 20, 'allowance', 'Tunjangan Transport & Makan', 1400000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(40, 20, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(41, 21, 'allowance', 'Tunjangan Transport & Makan', 1400000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(42, 21, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(43, 22, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(44, 22, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(45, 23, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(46, 23, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(47, 24, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(48, 24, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(49, 25, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(50, 25, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(51, 26, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(52, 26, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(53, 27, 'allowance', 'Tunjangan Transport & Makan', 700000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(54, 27, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(55, 28, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(56, 28, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(57, 29, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(58, 29, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(59, 30, 'allowance', 'Tunjangan Transport & Makan', 1000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(60, 30, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(61, 31, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(62, 31, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(63, 32, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(64, 32, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(65, 33, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(66, 33, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(67, 34, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(68, 34, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(69, 35, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(70, 35, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(71, 36, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(72, 36, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(73, 37, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(74, 37, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(75, 38, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(76, 38, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(77, 39, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(78, 39, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(79, 40, 'allowance', 'Tunjangan Transport & Makan', 700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(80, 40, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(81, 41, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(82, 41, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(83, 42, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(84, 42, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(85, 43, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(86, 43, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(87, 44, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(88, 44, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(89, 45, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(90, 45, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(91, 46, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(92, 46, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(93, 47, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(94, 47, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(95, 48, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(96, 48, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(97, 49, 'allowance', 'Tunjangan Transport & Makan', 1000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(98, 49, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(99, 50, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(100, 50, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(101, 51, 'allowance', 'Tunjangan Transport & Makan', 1000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(102, 51, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(103, 52, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(104, 52, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(105, 53, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(106, 53, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(107, 54, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(108, 54, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(109, 55, 'allowance', 'Tunjangan Transport & Makan', 700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(110, 55, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(111, 56, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(112, 56, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(113, 57, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(114, 57, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(115, 58, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(116, 58, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(117, 59, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(118, 59, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(119, 60, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(120, 60, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(121, 61, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(122, 61, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(123, 62, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(124, 62, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(125, 63, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(126, 63, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(127, 64, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(128, 64, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(129, 65, 'allowance', 'Tunjangan Transport & Makan', 1000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(130, 65, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(131, 66, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(132, 66, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(133, 67, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(134, 67, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(135, 68, 'allowance', 'Tunjangan Transport & Makan', 1300000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(136, 68, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(137, 69, 'allowance', 'Tunjangan Transport & Makan', 1400000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(138, 69, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(139, 70, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(140, 70, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(141, 71, 'allowance', 'Tunjangan Transport & Makan', 700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(142, 71, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(143, 72, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(144, 72, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(145, 73, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(146, 73, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(147, 74, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(148, 74, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(149, 75, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(150, 75, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(151, 76, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(152, 76, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(153, 77, 'allowance', 'Tunjangan Transport & Makan', 700000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(154, 77, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(155, 78, 'allowance', 'Tunjangan Transport & Makan', 1400000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(156, 78, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(157, 79, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(158, 79, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(159, 80, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(160, 80, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(161, 81, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(162, 81, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(163, 82, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(164, 82, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(165, 83, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(166, 83, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(167, 84, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(168, 84, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(169, 85, 'allowance', 'Tunjangan Transport & Makan', 900000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(170, 85, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(171, 86, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(172, 86, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(173, 87, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(174, 87, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(175, 88, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(176, 88, 'deduction', 'Potongan BPJS / PPh21', 150000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(177, 89, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(178, 89, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(179, 90, 'allowance', 'Tunjangan Transport & Makan', 1100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(180, 90, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(181, 91, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(182, 91, 'deduction', 'Potongan BPJS / PPh21', 100000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(183, 92, 'allowance', 'Tunjangan Transport & Makan', 1000000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(184, 92, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(185, 93, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(186, 93, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(187, 94, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(188, 94, 'deduction', 'Potongan BPJS / PPh21', 250000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(189, 95, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(190, 95, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(191, 96, 'allowance', 'Tunjangan Transport & Makan', 800000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(192, 96, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(193, 97, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(194, 97, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(195, 98, 'allowance', 'Tunjangan Transport & Makan', 1200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(196, 98, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(197, 99, 'allowance', 'Tunjangan Transport & Makan', 600000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(198, 99, 'deduction', 'Potongan BPJS / PPh21', 200000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(199, 100, 'allowance', 'Tunjangan Transport & Makan', 1500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(200, 100, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(201, 101, 'allowance', 'Tunjangan Transport & Makan', 500000, '2025-12-22 08:43:17', '2025-12-22 08:43:17'),
(202, 101, 'deduction', 'Potongan BPJS / PPh21', 50000, '2025-12-22 08:43:17', '2025-12-22 08:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `account_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shifts`
--

CREATE TABLE `shifts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `clock_in_start` time NOT NULL,
  `clock_in_end` time NOT NULL,
  `clock_out_start` time NOT NULL,
  `clock_out_end` time NOT NULL,
  `type` enum('fixed','flexible') NOT NULL DEFAULT 'fixed',
  `effective_start` datetime DEFAULT NULL,
  `effective_end` datetime DEFAULT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shifts`
--

INSERT INTO `shifts` (`id`, `name`, `description`, `start_time`, `end_time`, `clock_in_start`, `clock_in_end`, `clock_out_start`, `clock_out_end`, `type`, `effective_start`, `effective_end`, `is_default`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Shift Pagi Reguler', 'Shift pagi standar untuk karyawan reguler', '08:00:00', '17:00:00', '06:00:00', '23:00:00', '16:00:00', '21:00:00', 'fixed', NULL, NULL, 1, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 'Shift Siang', 'Shift siang untuk operational support', '12:00:00', '21:00:00', '10:00:00', '14:00:00', '20:00:00', '23:00:00', 'fixed', NULL, NULL, 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 'Shift Malam', 'Shift malam untuk security dan maintenance', '20:00:00', '05:00:00', '18:00:00', '22:00:00', '04:00:00', '08:00:00', 'fixed', NULL, NULL, 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 'Shift Fleksibel Project A', 'Shift temporer untuk project khusus dengan jam kerja fleksibel', '09:00:00', '18:00:00', '07:00:00', '11:00:00', '17:00:00', '22:00:00', 'flexible', '2025-12-22 15:43:16', '2026-03-22 15:43:16', 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(5, 'Shift Weekend', 'Shift khusus hari Sabtu dan Minggu', '09:00:00', '16:00:00', '07:00:00', '11:00:00', '15:00:00', '19:00:00', 'fixed', NULL, NULL, 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(6, 'Shift Part-time', 'Shift paruh waktu 4 jam', '13:00:00', '17:00:00', '12:00:00', '14:00:00', '16:00:00', '19:00:00', 'fixed', NULL, NULL, 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(7, 'Shift Libur Sementara', 'Shift yang sedang tidak aktif (contoh untuk testing)', '10:00:00', '19:00:00', '08:00:00', '12:00:00', '18:00:00', '22:00:00', 'fixed', NULL, NULL, 0, 0, '2025-12-22 08:43:16', '2025-12-22 08:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `division_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lead_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `division_id`, `name`, `lead_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Alpha Team', NULL, '2025-12-22 08:42:56', '2025-12-22 08:42:56'),
(2, 2, 'seize open-source content Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(3, 2, 'enhance collaborative networks Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(4, 2, 'syndicate strategic methodologies Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(5, 2, 'synthesize global deliverables Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(6, 3, 'target B2B synergies Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(7, 3, 'deploy distributed interfaces Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(8, 3, 'orchestrate wireless methodologies Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(9, 3, 'strategize front-end eyeballs Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(10, 3, 'maximize web-enabled experiences Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(11, 4, 'innovate turn-key webservices Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(12, 4, 'engineer out-of-the-box platforms Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(13, 4, 'redefine enterprise e-markets Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(14, 4, 'grow 24/365 e-business Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(15, 5, 'iterate front-end systems Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(16, 5, 'maximize ubiquitous markets Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(17, 5, 'deliver intuitive partnerships Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(18, 5, 'incentivize virtual relationships Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(19, 6, 'generate integrated platforms Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(20, 6, 'implement frictionless action-items Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(21, 6, 'deliver real-time initiatives Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(22, 7, 'reinvent viral bandwidth Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(23, 7, 'transform plug-and-play portals Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(24, 7, 'synthesize killer e-business Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(25, 7, 'extend scalable deliverables Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(26, 7, 'productize visionary initiatives Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(27, 8, 'exploit robust paradigms Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(28, 8, 'recontextualize revolutionary models Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(29, 8, 'embrace 24/7 schemas Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(30, 8, 'disintermediate real-time content Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(31, 9, 'seize intuitive communities Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(32, 9, 'generate end-to-end metrics Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(33, 9, 'strategize wireless architectures Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(34, 9, 'leverage transparent portals Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(35, 10, 'engage bricks-and-clicks convergence Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(36, 10, 'streamline real-time vortals Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(37, 10, 'orchestrate compelling supply-chains Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(38, 10, 'drive B2B users Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(39, 10, 'engineer magnetic convergence Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(40, 11, 'empower world-class content Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(41, 11, 'orchestrate granular vortals Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(42, 11, 'transform rich communities Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57'),
(43, 11, 'extend robust ROI Team', NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57');

-- --------------------------------------------------------

--
-- Table structure for table `team_shift`
--

CREATE TABLE `team_shift` (
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team_working_days`
--

CREATE TABLE `team_working_days` (
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `working_days_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED DEFAULT NULL,
  `employee_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `birth_place` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `hired_at` date DEFAULT NULL,
  `employment_status` enum('active','resigned','terminated','retired') NOT NULL DEFAULT 'active',
  `resigned_at` date DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `division_id` bigint(20) UNSIGNED DEFAULT NULL,
  `team_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `account_id`, `employee_code`, `name`, `phone`, `address`, `gender`, `religion`, `birth_place`, `birth_date`, `profile_pic`, `job_title`, `hired_at`, `employment_status`, `resigned_at`, `deleted_at`, `created_at`, `updated_at`, `division_id`, `team_id`) VALUES
(1, 1, '0000000000', 'Super Admin', '081234567890', 'Headquarters', 'male', NULL, 'Metropolis', '1995-12-22', NULL, 'Administrator', '2020-12-22', 'active', NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57', 1, 1),
(2, 2, '9846546196', 'Therese Lemke', '+1-458-676-6973', '480 Stephanie Course Suite 602\nSouth Yolanda, HI 90746-2575', 'male', NULL, 'Elfriedafort', '1998-07-01', NULL, 'Orthodontist', '2022-11-26', 'resigned', NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57', 2, 4),
(3, 3, '7817435115', 'Rosalyn Towne Sr.', '(229) 699-3526', '91367 Cremin Crest\nWest Lillian, AL 38306', 'male', NULL, 'East Kaylin', '1995-12-20', NULL, 'Cabinetmaker', '2023-01-05', 'resigned', NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57', 2, 4),
(4, 4, '9690168491', 'Idella Hermann', '408.610.5937', '98260 Weber Neck Apt. 867\nKozeytown, MD 33571-1473', 'female', NULL, 'Paigeberg', '1994-08-26', NULL, 'Mail Clerk', '2025-05-14', 'retired', NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57', 4, NULL),
(5, 5, '6468117389', 'Oma Beatty', '828.997.4893', '185 Lang Groves Suite 618\nPort Leilaberg, CT 56910-4853', 'male', NULL, 'Kelsistad', '1998-06-15', NULL, 'Courier', '2025-03-07', 'terminated', NULL, NULL, '2025-12-22 08:42:57', '2025-12-22 08:42:57', 2, 4),
(6, 6, '3849330279', 'Ethel Bernhard MD', '818-282-4926', '181 Toy Extensions Apt. 468\nEast Zacherystad, CA 78496-4823', 'female', NULL, 'East Roystad', '2013-04-10', NULL, 'Aircraft Mechanics OR Aircraft Service Technician', '2023-05-14', 'resigned', NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58', 1, NULL),
(7, 7, '7441533213', 'Trisha Blick', '248-362-0898', '30317 Chelsey Village Suite 174\nDomenickport, AK 38652-3995', 'male', NULL, 'North Greyson', '1987-12-16', NULL, 'Nursing Instructor', '2021-10-13', 'active', NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58', 7, 23),
(8, 8, '8027844824', 'Dr. Gideon Schiller IV', '(401) 246-5807', '94323 Ortiz Harbor Apt. 352\nNitzschetown, CO 35682-4313', 'male', NULL, 'Huelmouth', '1997-11-23', NULL, 'Cartoonist', '2021-10-01', 'active', NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58', 8, 30),
(9, 9, '0819609804', 'Mr. Rasheed McCullough MD', '(629) 406-2898', '9646 Edgardo Locks\nGeorgeshire, ME 05334', 'female', NULL, 'Bayerside', '2011-09-16', NULL, 'Forest Fire Inspector', '2024-05-11', 'resigned', NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58', 10, NULL),
(10, 10, '9691572641', 'Miss Miracle Bechtelar V', '1-435-658-5424', '348 Leannon Gateway Suite 326\nNew Greentown, AL 67270-2934', 'male', NULL, 'East Valentinetown', '1973-02-03', NULL, 'Financial Manager', '2025-12-20', 'resigned', NULL, NULL, '2025-12-22 08:42:58', '2025-12-22 08:42:58', 8, NULL),
(11, 11, '7275195576', 'Monty Lubowitz', '410.804.4599', '42000 Hoeger Gardens Suite 881\nWest Sharon, KS 07819', 'female', NULL, 'Rodriguezmouth', '2014-06-14', NULL, 'Floral Designer', '2024-10-02', 'retired', NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59', 2, 2),
(12, 12, '7427099740', 'Hector Gutmann', '1-952-350-0444', '39816 Dennis Way\nWeimannshire, IL 66098', 'female', NULL, 'Torpland', '2007-04-06', NULL, 'Government', '2022-08-04', 'active', NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59', 11, NULL),
(13, 13, '8628929613', 'Osbaldo Mosciski', '912.643.0899', '2556 Olaf Street\nCoraborough, WV 25909-1769', 'female', NULL, 'Ondrickaport', '1975-03-09', NULL, 'Sociology Teacher', '2024-03-08', 'retired', NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59', 11, 43),
(14, 14, '4209673951', 'Sarina Dickens', '281-726-3579', '3334 Kaelyn Square\nPort Raleighchester, NY 74189-8492', 'female', NULL, 'Marleemouth', '1978-03-12', NULL, 'Computer Scientist', '2024-08-16', 'resigned', NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59', 9, 33),
(15, 15, '2922405464', 'Prof. Yoshiko Kertzmann Jr.', '+14042784896', '65706 Nathanael Dale Suite 435\nEast Taniahaven, LA 41756', 'male', NULL, 'Lakinbury', '1982-04-28', NULL, 'Range Manager', '2025-11-03', 'active', NULL, NULL, '2025-12-22 08:42:59', '2025-12-22 08:42:59', 9, NULL),
(16, 16, '7360353723', 'Miss Beth Barton Sr.', '+1 (586) 727-2845', '16128 Karen Flats\nLake Gia, HI 65602-6441', 'female', NULL, 'Davisside', '2000-05-13', NULL, 'Home Appliance Repairer', '2022-03-22', 'terminated', NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00', 4, 14),
(17, 17, '7008246130', 'Felicita Legros', '+1.413.853.9934', '7936 Maggio Rest Suite 741\nAdamsmouth, DC 32146', 'male', NULL, 'Collinsberg', '1976-08-27', NULL, 'Graphic Designer', '2020-12-27', 'terminated', NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00', 1, NULL),
(18, 18, '7411854538', 'Lucy Cummings', '934-851-6523', '9304 Wendell Courts\nLednerborough, MO 69195-0965', 'female', NULL, 'New Weston', '1976-06-18', NULL, 'Protective Service Worker', '2022-07-30', 'active', NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00', 1, NULL),
(19, 19, '0403458690', 'Enoch Tromp', '1-320-665-3953', '52112 Nikolaus Mall\nHarrisville, AZ 30092', 'male', NULL, 'Keshawnhaven', '2010-03-11', NULL, 'Webmaster', '2022-06-03', 'resigned', NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00', 5, NULL),
(20, 20, '0493651892', 'Dr. Salma Schuppe', '1-218-737-1714', '32378 Huels Parkway\nKirstenmouth, MA 40065-4244', 'female', NULL, 'Gretashire', '2014-09-26', NULL, 'Installation and Repair Technician', '2022-09-03', 'terminated', NULL, NULL, '2025-12-22 08:43:00', '2025-12-22 08:43:00', 2, 3),
(21, 21, '6022928008', 'Leo Homenick', '+1-234-272-7184', '7864 Jodie Circles Apt. 604\nThompsonmouth, NH 55768-5802', 'male', NULL, 'Jonasport', '2017-02-15', NULL, 'Optometrist', '2021-07-11', 'retired', NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01', 5, NULL),
(22, 22, '3742793046', 'Prof. Hollie Toy MD', '(231) 251-0587', '70904 Angelita Orchard\nWest Mustafaton, KS 85213', 'female', NULL, 'Lehnerton', '2025-04-25', NULL, 'Bicycle Repairer', '2022-05-23', 'retired', NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01', 8, NULL),
(23, 23, '9370144461', 'Miss Bridgette Wisoky', '+1 (203) 221-3142', '74083 Telly Crossing Apt. 050\nMagdalenland, CO 92043-2907', 'male', NULL, 'Strosinside', '1997-01-10', NULL, 'Forest Fire Inspector', '2025-09-02', 'retired', NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01', 11, NULL),
(24, 24, '4229362477', 'Miss Eveline Konopelski DVM', '1-785-390-5627', '430 Zieme Mission Suite 079\nSouth Gabriella, NM 42100', 'male', NULL, 'Port Stephonberg', '2002-10-01', NULL, 'Office Machine Operator', '2023-11-04', 'retired', NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01', 3, 6),
(25, 25, '5809621006', 'Willow Dietrich', '+1-252-260-6631', '45768 Turcotte Green Apt. 782\nLake Dwightville, MA 33096-4443', 'female', NULL, 'North Wavaville', '2002-06-11', NULL, 'Municipal Fire Fighter', '2021-12-28', 'resigned', NULL, NULL, '2025-12-22 08:43:01', '2025-12-22 08:43:01', 6, NULL),
(26, 26, '6907741600', 'Creola Doyle', '(325) 749-4804', '217 Hilpert Squares\nNorth Bo, MT 61611', 'male', NULL, 'New Frankfort', '1995-01-06', NULL, 'Gas Processing Plant Operator', '2022-12-10', 'active', NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02', 1, NULL),
(27, 27, '4979943243', 'Malika Murray', '920-512-2644', '47441 Phoebe Avenue\nEast Zane, IN 16573-3084', 'female', NULL, 'Lake Kelsiemouth', '1975-10-10', NULL, 'Fire Inspector', '2024-07-07', 'resigned', NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02', 5, NULL),
(28, 28, '1887455880', 'Reed Sipes IV', '931.774.6027', '594 Kiehn Glens\nZorafort, DE 93615', 'male', NULL, 'McLaughlinhaven', '2022-09-06', NULL, 'Video Editor', '2023-09-09', 'active', NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02', 7, NULL),
(29, 29, '6601107391', 'Prof. Rosalyn Roberts', '+18303581045', '19497 Lehner Mews Apt. 704\nNew Agustinchester, SD 79744-0615', 'male', NULL, 'North Jonathan', '2019-06-07', NULL, 'Visual Designer', '2024-08-11', 'active', NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02', 5, NULL),
(30, 30, '2278691579', 'Adan Rau', '929.296.2111', '624 Scarlett Drive Apt. 789\nNorth Lelafurt, ID 02820-1816', 'male', NULL, 'Port Dannyport', '1995-02-10', NULL, 'Bellhop', '2021-04-11', 'active', NULL, NULL, '2025-12-22 08:43:02', '2025-12-22 08:43:02', 10, NULL),
(31, 31, '1200739359', 'Sandy Cremin', '+1-360-399-0342', '25345 Kozey Walk\nSouth Eileen, RI 10605', 'female', NULL, 'Lake Valentinamouth', '2012-04-14', NULL, 'Lawn Service Manager', '2025-02-03', 'retired', NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03', 10, NULL),
(32, 32, '2180126847', 'Rosalia Roob', '754.370.0481', '8746 Cecelia Mountains Apt. 317\nMillsfort, AZ 10823', 'male', NULL, 'DuBuqueberg', '2025-10-22', NULL, 'Welder', '2024-08-28', 'retired', NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03', 4, NULL),
(33, 33, '8903712856', 'Abdul Kuhic', '828.655.7558', '988 Gerlach Prairie Suite 786\nDixieberg, MD 94605', 'female', NULL, 'North Bobbie', '1972-07-01', NULL, 'Press Machine Setter, Operator', '2024-06-29', 'active', NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03', 11, NULL),
(34, 34, '4975344185', 'Ms. Anahi Jast', '978.653.4867', '2302 Lester Flat\nNew Arjunbury, NM 81776', 'female', NULL, 'South Isabelle', '2018-07-19', NULL, 'Real Estate Broker', '2020-12-23', 'resigned', NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03', 6, 21),
(35, 35, '1850242008', 'Murphy Cassin II', '+1 (423) 636-9189', '5286 Abbott Lakes\nPattieport, TX 30449-4305', 'female', NULL, 'East Jared', '2021-04-05', NULL, 'Transportation Attendant', '2024-04-13', 'resigned', NULL, NULL, '2025-12-22 08:43:03', '2025-12-22 08:43:03', 3, NULL),
(36, 36, '1369924483', 'Afton Nienow DDS', '+1 (845) 755-3768', '969 Rowe Stravenue Suite 077\nNorth Dejahtown, WV 93590-0735', 'female', NULL, 'Wilkinsonmouth', '2007-04-20', NULL, 'Train Crew', '2022-12-05', 'resigned', NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04', 8, 29),
(37, 37, '8276858798', 'Nella Mills', '1-878-441-0262', '4635 Balistreri Underpass Apt. 962\nKipfort, IN 33144-6815', 'female', NULL, 'Chelseaview', '2006-06-04', NULL, 'Hoist and Winch Operator', '2025-06-30', 'resigned', NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04', 3, NULL),
(38, 38, '0480931237', 'Waylon Glover', '(931) 758-7871', '9319 Cayla Haven Suite 939\nSouth Dariusburgh, RI 10902', 'female', NULL, 'Pollichbury', '2014-11-11', NULL, 'TSA', '2025-10-21', 'active', NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04', 7, 25),
(39, 39, '7155910244', 'Prof. Reina Lang', '+1.380.223.4685', '82815 Aurelie Creek Apt. 404\nEast Russelberg, SD 75892-4018', 'female', NULL, 'New Savanahfort', '1996-03-17', NULL, 'Architect', '2021-06-21', 'retired', NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04', 5, NULL),
(40, 40, '7914835139', 'Jadon Ankunding DVM', '706.863.4675', '5175 Blick Rue\nDickiton, NJ 93160', 'male', NULL, 'Port Pierre', '1971-08-06', NULL, 'Postal Service Mail Carrier', '2024-11-27', 'retired', NULL, NULL, '2025-12-22 08:43:04', '2025-12-22 08:43:04', 6, NULL),
(41, 41, '2181531317', 'Laura McClure', '404.323.3804', '762 Christiansen Underpass Suite 748\nRunteborough, NC 05486', 'female', NULL, 'East Simonechester', '1995-12-31', NULL, 'Plumber', '2023-09-04', 'resigned', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 1, NULL),
(42, 42, '1250509862', 'Aileen Balistreri', '1-773-715-0087', '2130 Ondricka Mountain\nWest Mariahland, MA 43228', 'female', NULL, 'Artchester', '1984-06-28', NULL, 'Fiberglass Laminator and Fabricator', '2025-03-03', 'retired', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 1, NULL),
(43, 43, '5356064346', 'Peyton Feeney', '1-734-900-0542', '6537 Christiansen Trail Suite 652\nGreenholthaven, MN 44652', 'male', NULL, 'New Meaganside', '1993-08-14', NULL, 'Library Assistant', '2025-05-07', 'resigned', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 4, NULL),
(44, 44, '7514322494', 'Dr. Eula Reinger', '(820) 379-0965', '65523 Flavie Groves\nGiovanniberg, WA 38623', 'male', NULL, 'West Aliciachester', '2008-11-01', NULL, 'Signal Repairer OR Track Switch Repairer', '2022-02-14', 'resigned', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 6, 20),
(45, 45, '3319308484', 'Cyril Larson DVM', '470.201.7975', '968 Marvin Fords\nDickifurt, SC 40591', 'female', NULL, 'North Dianaborough', '2017-03-24', NULL, 'Logging Tractor Operator', '2023-12-15', 'terminated', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 1, 1),
(46, 46, '5486218746', 'Finn Oberbrunner Sr.', '1-980-407-0852', '5307 Guido Crescent\nLake Shea, IL 90536', 'female', NULL, 'Briellebury', '1988-06-15', NULL, 'Food Preparation', '2024-10-14', 'terminated', NULL, NULL, '2025-12-22 08:43:05', '2025-12-22 08:43:05', 11, 40),
(47, 47, '7610404254', 'Molly Towne', '+15618871732', '262 Laverne Junctions\nPort Amiramouth, IL 37742-3408', 'male', NULL, 'Schroederhaven', '1987-02-05', NULL, 'Occupational Therapist Assistant', '2024-12-24', 'terminated', NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06', 7, NULL),
(48, 48, '3440038033', 'Rosemary Hyatt', '507.673.2195', '93269 Dietrich Garden\nWest Zachariahshire, MA 71232-2443', 'male', NULL, 'Port Julie', '2020-09-15', NULL, 'Singer', '2025-09-02', 'resigned', NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06', 3, NULL),
(49, 49, '6634788985', 'Mathew Powlowski', '+1-772-521-7089', '9965 Koelpin Island\nDickiside, TN 61669', 'female', NULL, 'West Imabury', '2019-07-02', NULL, 'Forensic Investigator', '2025-03-14', 'active', NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06', 9, NULL),
(50, 50, '7763229156', 'Ms. Kristina Upton MD', '1-641-881-2249', '146 Bruen Ports Suite 162\nWest Mozellberg, ME 70237-0123', 'male', NULL, 'Frankiemouth', '1999-09-27', NULL, 'Orthotist OR Prosthetist', '2021-10-09', 'resigned', NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06', 11, 41),
(51, 51, '0536981775', 'Tyrique Dietrich', '423-464-3206', '3280 Lehner Ranch\nGorczanyshire, UT 36711', 'female', NULL, 'Sauermouth', '2003-07-17', NULL, 'Agricultural Science Technician', '2024-12-31', 'active', NULL, NULL, '2025-12-22 08:43:06', '2025-12-22 08:43:06', 5, NULL),
(52, 52, '5960310014', 'Alexandria Wyman', '(469) 905-8241', '398 Antonia Neck\nWatsicahaven, CT 11952', 'male', NULL, 'South Amanda', '2010-03-26', NULL, 'Order Filler', '2025-09-22', 'retired', NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07', 6, NULL),
(53, 53, '2641536751', 'Hardy Shields', '520-665-4720', '3460 Astrid Forest\nAssuntatown, AR 38010', 'female', NULL, 'East Durward', '1991-10-02', NULL, 'Machine Operator', '2025-04-16', 'retired', NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07', 8, 29),
(54, 54, '2503013947', 'Mr. Ryan Corwin Sr.', '+14096751458', '227 Leola Avenue Suite 400\nGayleburgh, FL 49718', 'female', NULL, 'Maybellbury', '1981-09-29', NULL, 'Medical Scientists', '2025-11-15', 'terminated', NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07', 1, NULL),
(55, 55, '5242654736', 'Royce Jerde', '+1.707.546.0666', '559 Christiana Spur Suite 141\nSouth Waylon, CO 72099-1719', 'male', NULL, 'Ritchieview', '2002-01-02', NULL, 'MARCOM Manager', '2022-01-13', 'active', NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07', 1, NULL),
(56, 56, '2231726315', 'Miss Monique Trantow DDS', '1-281-795-6027', '641 Gleason Corners\nSouth Aidenburgh, CT 63679', 'female', NULL, 'Harveyfort', '2021-03-05', NULL, 'Engineering Teacher', '2022-12-28', 'retired', NULL, NULL, '2025-12-22 08:43:07', '2025-12-22 08:43:07', 5, NULL),
(57, 57, '8501895960', 'Nyasia Nitzsche', '361-984-3725', '26017 Koelpin Run Apt. 913\nSanfordmouth, AK 58549-3123', 'male', NULL, 'Rahulville', '1984-02-25', NULL, 'Chemist', '2022-04-24', 'active', NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08', 10, NULL),
(58, 58, '9121208824', 'Dr. Giovanna Grant', '1-309-557-7694', '3115 Konopelski Harbor\nSouth Katlyn, PA 26962-3146', 'female', NULL, 'Roxanneland', '1979-04-05', NULL, 'Sys Admin', '2023-07-12', 'active', NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08', 10, 38),
(59, 59, '9429136086', 'Ewald Hauck PhD', '(503) 537-8666', '5291 Powlowski Curve Apt. 767\nLaronview, AK 27428', 'female', NULL, 'Lake Lewis', '1981-09-14', NULL, 'Deburring Machine Operator', '2024-07-08', 'terminated', NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08', 8, NULL),
(60, 60, '4901141878', 'Maritza Moen', '+1 (832) 245-5575', '84847 Boyer Streets Apt. 469\nWest Zackeryton, ND 65849', 'female', NULL, 'Jacobsfurt', '1984-12-07', NULL, 'Dancer', '2021-08-28', 'resigned', NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08', 4, NULL),
(61, 61, '5460965422', 'Viviane Hane', '1-386-218-6815', '7338 Tianna Knolls Apt. 936\nSouth Asha, IA 12614', 'male', NULL, 'Theresiafurt', '1994-01-19', NULL, 'Aircraft Cargo Handling Supervisor', '2025-08-25', 'terminated', NULL, NULL, '2025-12-22 08:43:08', '2025-12-22 08:43:08', 10, 36),
(62, 62, '1347010682', 'Stevie Schowalter', '+1.479.216.0009', '10022 Maggio Valley\nEast Raymundofurt, VA 18111-6001', 'male', NULL, 'Altheaburgh', '2001-02-13', NULL, 'Segmental Paver', '2023-07-11', 'retired', NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09', 3, NULL),
(63, 63, '7012064996', 'Ms. Golda Raynor IV', '+1 (364) 872-1806', '33780 Huels Isle\nFelicitafort, ME 49760-6585', 'male', NULL, 'East Warrenfurt', '2002-09-13', NULL, 'Stone Cutter', '2023-07-27', 'retired', NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09', 2, NULL),
(64, 64, '1031095159', 'Carey Raynor', '+1.269.879.7412', '339 Katelin Landing Apt. 241\nLeschborough, WI 83463-8488', 'male', NULL, 'Port Alana', '2021-12-20', NULL, 'Precision Lens Grinders and Polisher', '2024-01-08', 'active', NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09', 4, 12),
(65, 65, '9800456960', 'Gillian Schoen', '(262) 725-2315', '4301 Lonnie Squares\nCamyllemouth, OR 64340', 'female', NULL, 'Port Ezraland', '1975-05-16', NULL, 'Special Force', '2021-08-28', 'active', NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09', 4, NULL),
(66, 66, '8928656485', 'Rashawn Lowe Jr.', '+1.443.536.3626', '1644 Jacey Highway Suite 992\nLuigiview, ME 37284-0739', 'female', NULL, 'Maritzafort', '2007-05-15', NULL, 'Statistical Assistant', '2024-12-17', 'resigned', NULL, NULL, '2025-12-22 08:43:09', '2025-12-22 08:43:09', 11, NULL),
(67, 67, '6313932252', 'Rosalee White', '(913) 889-0222', '556 Bergnaum Trace Suite 904\nSouth Stephany, VA 13920-4993', 'male', NULL, 'Cliffordtown', '1977-07-24', NULL, 'Installation and Repair Technician', '2022-01-14', 'resigned', NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10', 3, NULL),
(68, 68, '0985548147', 'Arturo Donnelly MD', '+1 (937) 514-6770', '23767 Sammy Stream Apt. 955\nMaggiestad, DE 77657', 'male', NULL, 'Kalliefurt', '2022-04-12', NULL, 'Trainer', '2022-05-23', 'retired', NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10', 2, NULL),
(69, 69, '2351970003', 'Mr. Clemens Rohan V', '281.449.3889', '385 Heath Fields\nNorth Lorenzchester, IN 05152-8005', 'female', NULL, 'Port Chrisshire', '2013-07-05', NULL, 'Landscape Artist', '2024-03-22', 'resigned', NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10', 4, 11),
(70, 70, '8238360311', 'Zakary Heathcote', '1-480-333-5173', '8820 Howell Stream Suite 311\nSouth Claudiaport, NM 92309', 'female', NULL, 'Lake Axel', '1997-02-28', NULL, 'Petroleum Engineer', '2021-02-14', 'terminated', NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10', 9, NULL),
(71, 71, '2919180152', 'Silas Becker', '626-976-2562', '56458 Bins Roads Apt. 508\nStokesberg, PA 09882', 'male', NULL, 'Flossieland', '1983-03-25', NULL, 'Mapping Technician', '2024-01-27', 'active', NULL, NULL, '2025-12-22 08:43:10', '2025-12-22 08:43:10', 4, NULL),
(72, 72, '2840787315', 'Juliet Fahey', '934-476-3723', '8345 Erdman Viaduct\nYostport, KY 22636-3753', 'female', NULL, 'Vinceborough', '2019-02-21', NULL, 'Waiter', '2022-02-04', 'active', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 2, 3),
(73, 73, '7019372248', 'Kristin Pouros', '737-510-6281', '1038 Murray Crossing Suite 013\nCruickshankview, DC 15463', 'male', NULL, 'Wolffton', '1971-07-13', NULL, 'Park Naturalist', '2023-12-16', 'resigned', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 9, 33),
(74, 74, '0412430756', 'Mr. Lee Zieme III', '660.360.0988', '143 Emmanuel Corners Apt. 905\nProhaskachester, IA 29018-2326', 'male', NULL, 'Lake Ameliemouth', '1982-04-30', NULL, 'Anthropologist', '2022-07-23', 'resigned', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 7, NULL),
(75, 75, '5542869711', 'Elsie McGlynn DVM', '+1-929-594-1287', '4467 Wiza Parkways\nLake Nealstad, WI 91137-5111', 'male', NULL, 'Port Alekport', '1994-04-12', NULL, 'Biomedical Engineer', '2022-01-21', 'resigned', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 6, NULL),
(76, 76, '2737338872', 'Ms. Brandyn DuBuque', '484-251-3055', '588 Garnett Wells Apt. 946\nEast Caleb, CA 68648', 'female', NULL, 'North Kiannamouth', '2004-11-02', NULL, 'Plant Scientist', '2022-05-23', 'active', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 7, NULL),
(77, 77, '5516116540', 'Dr. Stewart Aufderhar MD', '+1.920.649.4670', '763 O\'Hara Plains\nNorth Wendy, OR 70411-0958', 'male', NULL, 'West Retha', '2018-04-28', NULL, 'Retail Sales person', '2021-07-03', 'terminated', NULL, NULL, '2025-12-22 08:43:11', '2025-12-22 08:43:11', 7, 24),
(78, 78, '8046893954', 'Cade Schuppe', '(531) 856-7495', '456 Ozella Plain\nFlatleyshire, OH 18031-2497', 'male', NULL, 'North Robyn', '1992-07-19', NULL, 'Order Filler', '2023-03-30', 'terminated', NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12', 9, NULL),
(79, 79, '3285074905', 'Hillary Lemke', '+1.607.909.5607', '1403 Grimes Vista Suite 268\nRatkeport, WA 39577', 'female', NULL, 'North Kodyfurt', '1978-06-15', NULL, 'Locker Room Attendant', '2023-04-11', 'terminated', NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12', 4, NULL),
(80, 80, '9625168316', 'Brenda Nolan', '+1.720.797.5889', '35307 Marietta Manors Suite 047\nEast Skyla, NE 66040-0753', 'male', NULL, 'Pollichside', '2021-11-21', NULL, 'Refinery Operator', '2023-12-27', 'terminated', NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12', 7, 23),
(81, 81, '3606359885', 'Amparo Cassin', '+1-580-653-3479', '1692 Mozell Street Suite 914\nMaxinebury, WA 49037-4487', 'female', NULL, 'Dickifort', '1973-05-08', NULL, 'Production Helper', '2024-04-06', 'resigned', NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12', 4, NULL),
(82, 82, '8410427327', 'Buster Nienow', '+15408055354', '7907 Koepp Rest\nJamisonville, NM 47365-7996', 'female', NULL, 'North Carrie', '2003-08-10', NULL, 'Commercial and Industrial Designer', '2024-12-14', 'terminated', NULL, NULL, '2025-12-22 08:43:12', '2025-12-22 08:43:12', 4, 14),
(83, 83, '1792899766', 'Abe Pagac', '+1-609-800-6915', '2191 Franecki Junction\nDarrelhaven, WV 85052-5229', 'male', NULL, 'Sipeston', '2019-08-01', NULL, 'Sports Book Writer', '2025-06-04', 'resigned', NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13', 1, 1),
(84, 84, '5014185593', 'Jessyca Turcotte', '802.581.7145', '520 Spinka Dale\nNew Kiarra, AL 05202', 'female', NULL, 'New Bennytown', '1973-12-13', NULL, 'Religious Worker', '2025-05-03', 'active', NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13', 9, NULL),
(85, 85, '4795020896', 'Desiree Monahan III', '1-820-909-3004', '31493 Abe Village Suite 728\nBruenmouth, IL 73941-7020', 'female', NULL, 'Schadenmouth', '1992-05-04', NULL, 'Motorboat Mechanic', '2021-06-28', 'retired', NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13', 11, NULL),
(86, 86, '5202280542', 'Brenden Homenick', '419.934.8664', '53997 Zulauf Islands Apt. 081\nLake Vanmouth, WA 60291', 'female', NULL, 'South Jamaal', '2007-05-05', NULL, 'Painter and Illustrator', '2025-06-28', 'active', NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13', 6, NULL),
(87, 87, '2285054121', 'Kari Wilderman', '+1.931.540.0726', '7550 Ollie Dale\nLake Della, LA 00309', 'male', NULL, 'North Myrnafort', '1971-12-19', NULL, 'Explosives Expert', '2023-01-17', 'active', NULL, NULL, '2025-12-22 08:43:13', '2025-12-22 08:43:13', 1, NULL),
(88, 88, '8274602428', 'Ms. Cortney Watsica V', '1-203-783-7518', '99976 Dixie Landing\nSouth Oswaldo, VT 69739', 'female', NULL, 'Damonport', '2002-12-03', NULL, 'Electrical and Electronic Inspector and Tester', '2025-11-15', 'terminated', NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14', 11, NULL),
(89, 89, '1979125809', 'Mr. Oswaldo Ankunding', '+1-775-848-8176', '18386 Fabian Extensions\nJohnathonside, SD 25556', 'male', NULL, 'Jamaalside', '2024-02-25', NULL, 'Brazing Machine Operator', '2025-11-03', 'terminated', NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14', 10, 37),
(90, 90, '6179472449', 'Elnora West', '332.837.5523', '655 Quitzon Village\nNorth Damien, FL 18255', 'female', NULL, 'Hettingerton', '2004-08-02', NULL, 'Stonemason', '2021-01-07', 'terminated', NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14', 1, NULL),
(91, 91, '5260837658', 'Alec Gerlach', '(210) 573-3683', '4893 Elvera Cape Suite 374\nMcCulloughland, WY 63886', 'female', NULL, 'Kshlerinport', '1970-04-09', NULL, 'Photographic Developer', '2025-04-15', 'retired', NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14', 4, NULL),
(92, 92, '4165199389', 'Madalyn Kulas', '+17086027792', '4274 Addie Flats\nNorth Jamarburgh, IN 35697-8131', 'male', NULL, 'Eleanorehaven', '1982-09-19', NULL, 'Opticians', '2024-09-08', 'retired', NULL, NULL, '2025-12-22 08:43:14', '2025-12-22 08:43:14', 2, NULL),
(93, 93, '6346925766', 'Lenore Shields', '+1-432-633-2264', '1739 Russel Rapid\nWildermanmouth, ID 85826-7126', 'female', NULL, 'Willyburgh', '1972-06-13', NULL, 'Calibration Technician OR Instrumentation Technician', '2022-03-07', 'resigned', NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15', 6, 20),
(94, 94, '7086506768', 'Prof. Cathy Runolfsdottir DDS', '1-689-452-8185', '83626 Tess View\nHaleyville, AZ 60954-5508', 'female', NULL, 'North Bettye', '1976-05-27', NULL, 'Healthcare Support Worker', '2021-10-31', 'resigned', NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15', 6, 19),
(95, 95, '0398631818', 'Kiel Terry', '980-864-1215', '46950 Turner Locks\nPort Dashawn, GA 07201-1945', 'female', NULL, 'Larsonview', '1985-10-31', NULL, 'Nuclear Power Reactor Operator', '2025-12-03', 'retired', NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15', 6, NULL),
(96, 96, '9866030228', 'Virginia Marks', '1-321-528-2539', '5285 Eloise Well\nSchoenshire, WI 79150', 'male', NULL, 'South Lorenza', '1977-12-23', NULL, 'Gaming Service Worker', '2025-03-18', 'retired', NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15', 5, NULL),
(97, 97, '4333273079', 'Marjorie Predovic', '+1.531.619.8762', '3105 Kendra Terrace Suite 955\nLangoshstad, DE 22516-2813', 'male', NULL, 'East Grahamborough', '2018-01-30', NULL, 'Ship Captain', '2025-05-26', 'retired', NULL, NULL, '2025-12-22 08:43:15', '2025-12-22 08:43:15', 9, NULL),
(98, 98, '9404112857', 'Arlie Spencer', '+1-678-503-7638', '433 Joelle Islands Apt. 254\nWest Mitchell, NJ 81853-5126', 'female', NULL, 'Oletaville', '2013-03-22', NULL, 'Psychology Teacher', '2022-01-03', 'terminated', NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16', 7, 24),
(99, 99, '0940175455', 'Anabelle Kris', '+1 (484) 967-0106', '13444 Boyle Points Suite 539\nReillyfurt, NY 13635-9329', 'female', NULL, 'Janickhaven', '2006-03-01', NULL, 'Private Sector Executive', '2023-06-30', 'resigned', NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16', 6, 21),
(100, 100, '4000932266', 'Ms. Samanta O\'Connell MD', '580-333-5941', '674 Dwight Mountains Apt. 589\nLake Cordelia, MS 53778-0760', 'male', NULL, 'New Nannieside', '1980-12-28', NULL, 'Brazer', '2023-08-30', 'active', NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16', 10, 39),
(101, 101, '2464013302', 'Priscilla Williamson', '+16268932236', '567 Shannon Circle Suite 217\nXanderstad, HI 86465-3456', 'male', NULL, 'Armstrongstad', '2004-10-25', NULL, 'Cartographer', '2024-06-18', 'terminated', NULL, NULL, '2025-12-22 08:43:16', '2025-12-22 08:43:16', 8, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_shift`
--

CREATE TABLE `user_shift` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_working_days`
--

CREATE TABLE `user_working_days` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `working_days_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `working_days`
--

CREATE TABLE `working_days` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `days_of_week` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`days_of_week`)),
  `description` text DEFAULT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `working_days`
--

INSERT INTO `working_days` (`id`, `name`, `display_name`, `days_of_week`, `description`, `is_default`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'monday_friday', 'Senin - Jumat', '[1,2,3,4,5]', 'Hari kerja standar Senin sampai Jumat', 1, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(2, 'monday_saturday', 'Senin - Sabtu', '[1,2,3,4,5,6]', 'Hari kerja Senin sampai Sabtu', 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(3, 'shift_4_days', '4 Hari Kerja', '[1,2,4,5]', 'Shift 4 hari kerja per minggu', 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16'),
(4, 'weekend_only', 'Akhir Pekan', '[6,7]', 'Hanya kerja di akhir pekan', 0, 1, '2025-12-22 08:43:16', '2025-12-22 08:43:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accounts_email_unique` (`email`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendances_user_id_foreign` (`user_id`),
  ADD KEY `attendances_reviewed_by_foreign` (`reviewed_by`);

--
-- Indexes for table `attendance_reasons`
--
ALTER TABLE `attendance_reasons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendance_reasons_attendance_id_foreign` (`attendance_id`);

--
-- Indexes for table `base_salaries`
--
ALTER TABLE `base_salaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `base_salaries_user_id_foreign` (`user_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `divisions_head_id_foreign` (`head_id`);

--
-- Indexes for table `division_shift`
--
ALTER TABLE `division_shift`
  ADD PRIMARY KEY (`division_id`,`shift_id`),
  ADD KEY `division_shift_shift_id_foreign` (`shift_id`);

--
-- Indexes for table `division_working_days`
--
ALTER TABLE `division_working_days`
  ADD PRIMARY KEY (`division_id`,`working_days_id`),
  ADD KEY `division_working_days_working_days_id_foreign` (`working_days_id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `documents_user_id_document_type_id_unique` (`user_id`,`document_type_id`),
  ADD KEY `documents_document_type_id_foreign` (`document_type_id`);

--
-- Indexes for table `document_types`
--
ALTER TABLE `document_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `file_uploads`
--
ALTER TABLE `file_uploads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_uploads_entity_type_entity_id_index` (`entity_type`,`entity_id`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leaves_user_id_foreign` (`user_id`),
  ADD KEY `leaves_leave_type_id_foreign` (`leave_type_id`),
  ADD KEY `leaves_approved_by_foreign` (`approved_by`);

--
-- Indexes for table `leave_balances`
--
ALTER TABLE `leave_balances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `leave_balances_user_id_leave_type_id_year_unique` (`user_id`,`leave_type_id`,`year`),
  ADD KEY `leave_balances_leave_type_id_foreign` (`leave_type_id`);

--
-- Indexes for table `leave_types`
--
ALTER TABLE `leave_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `overtimes`
--
ALTER TABLE `overtimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `overtimes_user_id_foreign` (`user_id`),
  ADD KEY `overtimes_shift_id_foreign` (`shift_id`),
  ADD KEY `overtimes_approved_by_foreign` (`approved_by`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `salaries`
--
ALTER TABLE `salaries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `salaries_user_id_period_start_period_end_unique` (`user_id`,`period_start`,`period_end`);

--
-- Indexes for table `salary_items`
--
ALTER TABLE `salary_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `salary_items_salary_id_foreign` (`salary_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_account_id_index` (`account_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teams_division_id_foreign` (`division_id`),
  ADD KEY `teams_lead_id_foreign` (`lead_id`);

--
-- Indexes for table `team_shift`
--
ALTER TABLE `team_shift`
  ADD PRIMARY KEY (`team_id`,`shift_id`),
  ADD KEY `team_shift_shift_id_foreign` (`shift_id`);

--
-- Indexes for table `team_working_days`
--
ALTER TABLE `team_working_days`
  ADD PRIMARY KEY (`team_id`,`working_days_id`),
  ADD KEY `team_working_days_working_days_id_foreign` (`working_days_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_employee_code_unique` (`employee_code`),
  ADD KEY `users_account_id_foreign` (`account_id`),
  ADD KEY `users_division_id_foreign` (`division_id`),
  ADD KEY `users_team_id_foreign` (`team_id`);

--
-- Indexes for table `user_shift`
--
ALTER TABLE `user_shift`
  ADD PRIMARY KEY (`user_id`,`shift_id`),
  ADD KEY `user_shift_shift_id_foreign` (`shift_id`);

--
-- Indexes for table `user_working_days`
--
ALTER TABLE `user_working_days`
  ADD PRIMARY KEY (`user_id`,`working_days_id`),
  ADD KEY `user_working_days_working_days_id_foreign` (`working_days_id`);

--
-- Indexes for table `working_days`
--
ALTER TABLE `working_days`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `attendance_reasons`
--
ALTER TABLE `attendance_reasons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `base_salaries`
--
ALTER TABLE `base_salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=289;

--
-- AUTO_INCREMENT for table `document_types`
--
ALTER TABLE `document_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_uploads`
--
ALTER TABLE `file_uploads`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_balances`
--
ALTER TABLE `leave_balances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `leave_types`
--
ALTER TABLE `leave_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `overtimes`
--
ALTER TABLE `overtimes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=373;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `salaries`
--
ALTER TABLE `salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `salary_items`
--
ALTER TABLE `salary_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT for table `shifts`
--
ALTER TABLE `shifts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `working_days`
--
ALTER TABLE `working_days`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances_reviewed_by_foreign` FOREIGN KEY (`reviewed_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `attendances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `attendance_reasons`
--
ALTER TABLE `attendance_reasons`
  ADD CONSTRAINT `attendance_reasons_attendance_id_foreign` FOREIGN KEY (`attendance_id`) REFERENCES `attendances` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `base_salaries`
--
ALTER TABLE `base_salaries`
  ADD CONSTRAINT `base_salaries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `divisions`
--
ALTER TABLE `divisions`
  ADD CONSTRAINT `divisions_head_id_foreign` FOREIGN KEY (`head_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `division_shift`
--
ALTER TABLE `division_shift`
  ADD CONSTRAINT `division_shift_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `division_shift_shift_id_foreign` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `division_working_days`
--
ALTER TABLE `division_working_days`
  ADD CONSTRAINT `division_working_days_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `division_working_days_working_days_id_foreign` FOREIGN KEY (`working_days_id`) REFERENCES `working_days` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_document_type_id_foreign` FOREIGN KEY (`document_type_id`) REFERENCES `document_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `documents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `leaves`
--
ALTER TABLE `leaves`
  ADD CONSTRAINT `leaves_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `leaves_leave_type_id_foreign` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leaves_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `leave_balances`
--
ALTER TABLE `leave_balances`
  ADD CONSTRAINT `leave_balances_leave_type_id_foreign` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leave_balances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `overtimes`
--
ALTER TABLE `overtimes`
  ADD CONSTRAINT `overtimes_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `overtimes_shift_id_foreign` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `overtimes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `salaries`
--
ALTER TABLE `salaries`
  ADD CONSTRAINT `salaries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `salary_items`
--
ALTER TABLE `salary_items`
  ADD CONSTRAINT `salary_items_salary_id_foreign` FOREIGN KEY (`salary_id`) REFERENCES `salaries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `teams_lead_id_foreign` FOREIGN KEY (`lead_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `team_shift`
--
ALTER TABLE `team_shift`
  ADD CONSTRAINT `team_shift_shift_id_foreign` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_shift_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `team_working_days`
--
ALTER TABLE `team_working_days`
  ADD CONSTRAINT `team_working_days_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_working_days_working_days_id_foreign` FOREIGN KEY (`working_days_id`) REFERENCES `working_days` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `users_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `users_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `user_shift`
--
ALTER TABLE `user_shift`
  ADD CONSTRAINT `user_shift_shift_id_foreign` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_shift_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_working_days`
--
ALTER TABLE `user_working_days`
  ADD CONSTRAINT `user_working_days_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_working_days_working_days_id_foreign` FOREIGN KEY (`working_days_id`) REFERENCES `working_days` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
