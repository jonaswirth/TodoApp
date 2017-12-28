CREATE DATABASE `todoapp` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `tasks` (
  `TaskID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Closed` bit(1) DEFAULT 0 NOT NULL,
  PRIMARY KEY (`TaskID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;


INSERT INTO `todoapp`.`tasks` (`Title`) VALUES("Make Laundry");

INSERT INTO `todoapp`.`tasks` (`Title`) VALUES("Do Homework");

INSERT INTO `todoapp`.`tasks` (`Title`) VALUES("Clean the bathroom");

INSERT INTO `todoapp`.`tasks` (`Title`) VALUES("Cook dinner");

