DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INT AUTO_INCREMENT NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE `role`(
  id INT AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE employee(
  id INT AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY (id)
);
-- SELECT * FROM department;
-- SELECT * FROM `role`;

-- SELECT title, `name`, salary
-- FROM `role`
-- LEFT JOIN department ON `role`.department_id = department.id;

-- SELECT * FROM employee;

-- SELECT first_name, last_name, title, manager_id
-- FROM employee
-- LEFT JOIN `role` ON employee.role_id = `role`.id
-- INNER JOIN `role` ON employee.manager_id = first_name;