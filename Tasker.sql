
-----------------------------
--- select all and execute --
-----------------------------

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
	task_description varchar(50),
	active INT
	);
--ROLLBACK;
COMMIT;
SELECT * FROM project_task;

--------Task Details--------
BEGIN;
CREATE TABLE task_details (
	id serial primary key,
	task_id INT,
	details varchar(280),
	active INT
	);
--ROLLBACK;
COMMIT;
SELECT * FROM task_details;
------END CREATE TABLES------

---------INSERT INTO---------
--------project_group--------
BEGIN;
INSERT INTO project_group (project_group_id, project_name, active) VALUES (1,'Kitchen',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (2,'Living Room',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (3,'Garage',1);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (4,'Bath',0);
INSERT INTO project_group (project_group_id, project_name, active) VALUES (5,'Laundry',-1);
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
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (1,1,'Wash dishes',1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (2,1,'Sweep floor',1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (3,2,'Vacuum floor',1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (4,4,'Wash floor',1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (5,5,'Wash laundry',-1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (6,3,'Sweep floor',1);
INSERT INTO project_task (task_id, project_group_id, task_description, active) VALUES (7,4,'Clean shower',1);
--ROLLBACK
COMMIT;
SELECT * FROM project_task;

--------Task Details--------
BEGIN;
INSERT INTO task_details (task_id, details, active) VALUES (1,'Fill dishwasher and wash remaining by hand', 1);
INSERT INTO task_details (task_id, details, active) VALUES (3,'Pickup toys before vacuuming', 9);
--ROLLBACK;
COMMIT;
SELECT * FROM task_details;