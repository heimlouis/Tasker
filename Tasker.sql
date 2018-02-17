--Add the SQL create db script
--------CREATE TABLES--------
--------project_group--------
BEGIN;
CREATE TABLE project_group (
	id serial primary key,
	project_group_id INT,
	project_name varchar(15),
	active INT
	);
--ROLLBACK;
COMMIT;
SELECT * FROM project_group;
--------active_key--------	
BEGIN;
CREATE TABLE active_key (
	id serial primary key,
	state_id INT,
	state varchar(10)
	);
--ROLLBACK;
COMMIT;
SELECT * FROM active_key;
--------project_task--------
BEGIN;
CREATE TABLE project_task (
	id serial primary key,
	task_id INT,
	project_group_id INT,
	task_name varchar(50),
	active INT
	);
--ROLLBACK;
COMMIT;
SELECT * FROM project_task;
-----------Notes-----------
BEGIN;
CREATE TABLE notes (
	id serial primary key,
	project_group_id INT,
	note varchar(280),
	active INT
	);
--ROLLBACK;
COMMIT;
SELECT * FROM notes;
------END CREATE TABLES------
---------INSERT INTO---------
--------project_group--------
BEGIN;
INSERT INTO project_group (project_group_id, project_name, active) VALUES (100,'Kitchen',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (200,'Living Room',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (300,'Garage',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (400,'Bath',0);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (500,'Laundry',-1);
--ROLLBACK
COMMIT;
SELECT * FROM project_group;
--------active_key--------
BEGIN;
INSERT INTO active_key (state_id, state) VALUES (1,'active');
INSERT INTO active_key (state_id, state) VALUES (0,'inactive');
INSERT INTO active_key (state_id, state) VALUES (9,'deleted');
--ROLLBACK
COMMIT;
SELECT * FROM active_key;
--------project_task--------
BEGIN;
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (1,100,'Wash dishes',1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (2,100,'Sweep floor',1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (3,200,'Vacuum floor',1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (4,400,'Wash floor',1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (5,500,'Wash laundry',-1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (6,300,'Sweep floor',1);
INSERT INTO project_task (task_id, project_group_id, task_name, active) VALUES (7,400,'Clean shower',1);
--ROLLBACK
COMMIT;
SELECT * FROM project_task;
-----------Notes-----------
BEGIN;
INSERT INTO notes (project_group_id, note, active) VALUES (100,'Rince dishes', 1);
INSERT INTO notes (project_group_id, note, active) VALUES (200,'Pickup toys before vacuuming', 9);
--ROLLBACK;
COMMIT;
SELECT * FROM notes;
-------END INSERT INTO-------