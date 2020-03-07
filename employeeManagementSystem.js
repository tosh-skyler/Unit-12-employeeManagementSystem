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
			  type: "list",
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
				viewAllEmp();
				break;

				case "View all Employees by Department":
				viewAllEmpDep();
				break;

				case "View all Employees by Manager":
				viewAllEmpManager();
				break;

				case "Add Employee":
				AddEmp();
				break;

				case "Remove Employee":
				removeEmp();
				break;

				case "Update Employee Role":
				updateEmpRole();
				break;

				case "Update Employee Manager":
				updateEmpManager();
				break;

				case "View all Roles":
				viewAllRoles();
				break;

				case "Add Role":
				addRole();
				break;

				case "Remove Role":
				removeRole();
				break;

				case 'Exit':
				connection.end();
				break;    
			} 
		  });
  }

  const viewAllEmp = () => {
	const query = connection.query(
		`SELECT
		FROM
		INNER JOIN
		ON`,
		function(err, res){
			if (err) throw err;
			console.table(res);
			runSearch();
		}
	)
  }

  const viewAllEmpDep = () => {
	console.log("viewAllEmpDep");
	connection.end();
}

const  viewAllEmpManager = () => {
	console.log("viewAllEmpManager");
	connection.end();
}

const AddEmp = () => {
	console.log("AddEmp");
	connection.end();
}

const removeEmp = () => {
	console.log("removeEmp");
	connection.end();
}

const updateEmpRole = () => {
	console.log("updateEmpRole");
	connection.end();
}

const updateEmpManager = () => {
	console.log("updateEmpManager");
	connection.end();
}

const viewAllRoles = () => {
	console.log("viewAllRoles");
	connection.end();
}

const addRole = () => {
	console.log("addRole");
	connection.end();
}

const removeRole = () => {
	console.log("removeRole");
	connection.end();
}


  
  