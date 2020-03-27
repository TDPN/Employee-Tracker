
INSERT INTO department (`name`) values ('Sales');
INSERT INTO department (`name`) values ('Engineering');
INSERT INTO department (`name`) values ('Finance');
INSERT INTO department (`name`) values ('Legal');

INSERT INTO `role` (title, salary, department_id) values ('Sales Lead', 100000, 1);
INSERT INTO `role` (title, salary, department_id) values ('Salesperson', 80000, 1);
INSERT INTO `role` (title, salary, department_id) values ('Lead Engineer', 150000, 2);
INSERT INTO `role` (title, salary, department_id) values ('Software Engineer', 120000, 2);
INSERT INTO `role` (title, salary, department_id) values ('Accountant', 125000, 3);
INSERT INTO `role` (title, salary, department_id) values ('Legal Team Lead', 250000, 4);
INSERT INTO `role` (title, salary, department_id) values ('Lawyer', 19000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('John', "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Mike', "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id) values ('Ashley', "Rodriguez", 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Kevin', "Tupik", 4,3);
INSERT INTO employee (first_name, last_name, role_id) values ('Malia', "Brown", 5);
INSERT INTO employee (first_name, last_name, role_id) values ('Sarah', "Lourd", 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Tom', "Allen", 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Christian', "Echenrode", 3, 2);
