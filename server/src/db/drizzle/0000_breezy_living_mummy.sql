CREATE TABLE `buildings` (
	`building_id` serial AUTO_INCREMENT NOT NULL,
	`building_name` varchar(255) NOT NULL,
	`total_floor` int NOT NULL,
	`total_room` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `buildings_building_id` PRIMARY KEY(`building_id`)
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`room_id` varchar(255) NOT NULL,
	`building_id` serial AUTO_INCREMENT NOT NULL,
	`room_no` int NOT NULL,
	`room_type_enum` enum('CLASS','LAB','LIBRARY','PLAYGROUND','HALL') NOT NULL DEFAULT 'CLASS',
	`floor_no` int NOT NULL,
	`capacity` int NOT NULL,
	`has_projector` boolean DEFAULT false,
	`has_ac` boolean DEFAULT false,
	`has_fan` boolean DEFAULT false,
	`has_cctv` boolean DEFAULT false,
	`has_white_board` boolean DEFAULT false,
	`status` enum('AVAILABLE','OCCUPIED') DEFAULT 'AVAILABLE',
	`createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `rooms_room_id` PRIMARY KEY(`room_id`),
	CONSTRAINT `unique_building_room` UNIQUE(`building_id`,`room_no`),
	CONSTRAINT `check_capacity` CHECK(`rooms`.`capacity`>0)
);
--> statement-breakpoint
CREATE TABLE `notices` (
	`id` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`filePath` varchar(255) NOT NULL,
	`notice_type_enum` enum('ACADEMIC','ADMINISTRATIVE','EXAM','EVENT','HOLIDAY','OTHER','ADMISSION','FEE') DEFAULT 'ACADEMIC',
	`audience_type_enum` enum('STUDENT','PARENT','TEACHER','ALL') DEFAULT 'ALL',
	CONSTRAINT `notices_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`imgUrl` varchar(500),
	`role_enum` enum('ADMIN','SUBADMIN','TEACHER','STUDENT','PARENT'),
	`gender_enum` enum('MALE','FEMALE'),
	`user_status_enum` enum('ACTIVE','INACTIVE','BLOCKED','DELETED','PENDING','APPROVED'),
	`lastLogin` datetime,
	`phone` varchar(11),
	`address` varchar(255),
	`loginAttempts` int DEFAULT 0,
	`createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `id_check` CHECK(`users`.`id` > 1000)
);
--> statement-breakpoint
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_building_id_buildings_building_id_fk` FOREIGN KEY (`building_id`) REFERENCES `buildings`(`building_id`) ON DELETE cascade ON UPDATE no action;