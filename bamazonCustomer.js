// CREATE DATABASE SCHEMA
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  root: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// END DB Schema




// connection.query("SELECT * FROM products", function(err, res) {
//   if (err) throw err;
//   if (res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i]);
//     }
//   }
// });

// adding a row to a table(create)
// connection.query("INSERT INTO products SET ?", {
//   item_id: "res.item_id",
//   product_name: "res.product_name",
//   stock_quantity: "res.stock_quantity"
// }, function(err, res) {
//   console.log("error");
//   console.log(err);
//   console.log("result");
//   console.log(res);
// });


// PRINT TABLE CONTENTS TO CONSOLE
connection.query('SELECT * FROM bamazon_db.products', function(error, results, fields) {
  if (error) throw error;
  // console.log(results);
  for (var i = 0; i < results.length; i++) {
    console.log(results[i].item_id + "|" + results[i].product_name + "|" + results[i].department_name + "|" + results[i].price + "|" + results[i].stock_quantity);
  }
  'use strict';
  var inquirer = require('inquirer');

  var questions = [{
      type: 'input',
      name: 'item_id',
      message: 'What\'s the ID of the product you would like to buy?'
    },
    {
      type: 'input',
      name: 'product_name',
      message: 'Please enter how many units of the product you would like to buy.',
      validate: function(value) {
        var pass = value.match(res[i].stock_quantity);
        if (pass) {
          return true;
        }
        return 'Insufficient quantity!';
      }
    }
  ];
  inquirer.prompt(questions).then(function(answers) {
    console.log(JSON.stringify(answers, null, '  '));
  });
  return (results.item_id);
});
connection.end();
