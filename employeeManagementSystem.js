var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
	host: "localhost",
  
	// Your port; if not 3306
	port: 3306,
  
	// Your username
	user: "root",
  
	// Your password
	password: "",
	database: "ems"
  });
  
  connection.connect(function(err) {
	if (err) throw err;
	runSearch();
  });

  function runSearch() {
	  inquirer
	  	.prompt({
			  name: "action",
			  type: "rawlist",
			  message: "What would you like to do?",
			  choices: [
				  "View all Employees",
				  "View all Employees by Department",
				  "View all Employees by Manager",
				  "Add Employee",
				  "Remove Employee",
				  "Update Employee Role",
				  "Update Employee Manager",
				  "View all Roles",
				  "Add Role"
			  ]
		  })
		  .then(function(answer) {
			switch (answer.action) {
				case "View all Employees":
				break;

				case "View all Employees by Department":
				break;

				case "View all Employees by Manager":
				break;

				case "Add Employee":
				break;

				case "Remove Employee":
				break;

				case "Update Employee Role":
				break;

				case "Update Employee Manager":
				break;

				case "View all Roles":
				break;

				case "Add Role":
				break;

				case "Remove Role":
				break;
			}
		  });
  }


  
  