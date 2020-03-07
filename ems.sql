DROP DATABASE IF EXISTS ems;
CREATE DATABASE ems;

USE ems;

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30),
    salary DECIMAL(30,2),
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
    PRIMARY KEY (id)
);