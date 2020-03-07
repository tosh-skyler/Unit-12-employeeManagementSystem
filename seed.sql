USE ems;


INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Iain", "Whitaker", 1),
("Bogdan", "Mansell", 1),
("Archer", "Gardner", 1),
("William", "Mullins", 1),
("Tom", "Morley", 1),
("Heidi", "Adam", 1),
("Dina", "Mcconnell", 1),
("Annabel", "Piper", 1),
("Alena", "Kelley", 1),
("Reggie", "Solomon", 1),
("Autumn", "Keeling", 1),
("Misbah", "Hunter", 1),
("Ravi", "Hume", 2),
("Muskaan", "Hawes", 3),
("May", "Akhtar", 3),
("Isaiah", "Hansen", 3),
("Juniper", "Winter", 3),
("Connie", "Barnard", 3),
("Garry", "Crawford", 3),
("Lucy", "Whitfield", 3),
("Darcie", "Dodson", 3),
("Lily", "Hinton", 4),
("Tiya", "Cordova", 5),
("Rajveer", "Kouma", 5),
("Precious", "Oneil", 5),
("Jarrad", "Wood", 6),
("Bogdan", "Irving", 6),
("Roxie", "Morse", 6),
("Izabella", "Noble", 6),
("Renesmee", "Sumner", 7 );


INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
("Sales Lead", 100000, 1), 
("Software Engineer", 120000, 2),
("Lead Engineer", 150000, 2),
("Accountant", 125000, 3),
("Lawyer", 190000, 4),
("Legal Team Lead", 250000, 4);


INSERT INTO departments (name)
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");


