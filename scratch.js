// Create DB Schema
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  root: 3306,
  user: 'root',
  password: '',
  database: "bamazon_db"
});
// END DB Schema


// CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFULL CONNECTION
connection.connect(function(err, res) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


var initiate = function() {
inquirer.prompt({

  type: "input",
  name: "item_id",

  message: "What is the product ID?"
}).then(function(res) {
  connection.connect("SELECT * FROM products", function(err, res) {

      for (var i = 0; i < item_id.length; i++) {
        console.log(answer.item_id);
        //   console.log(array);
        // }



      });
  }

});

//initiate();

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//
//
// });




//FUNCTION TO GRAB THE PRODUCTS TABLE FROM THE DATABASE AND PRINT RESULTS TO CONSOLE//
var makeTable = function(res) {

  // body...
}




//PRINTS THE TABLE TO THE CONSOLE WITH MINIMAL STYLING//
var tab = "\t";
console.log("item_id\tproduct_name\tdepartment_name\tprice\tstock_quantity");
console.log("--------------------------------------------------------");
//FOR LOOP GOES THR
//FOR LOOP GOES THROUGH THE MYSQL TABLE AND PRINTS EACH INDIVIDUAL ROW ON A NEW LINE//
for (var i = 0; i < res.length; i++) {
  console.log(res[i].item_id + tab + res[i].product_name + tab + res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
}
console.log("--------------------------------------------------------");
//RUNS THE CUSTOMER'S PROMPTS AFTER CREATING THE TABLE. SENDS res SO THE promptCustomer FUNCTION IS ABLE TO SEARCH THROUGH THE DATA//
// promptCustomer(res);
})
}

//
// // function which prompts the user for what action they should take
// var start = function() {
//   for (var i = 0; i < res.length; i++) {
//     console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
//   }
//   inquirer.prompt({
//     name: "item_id",
//     type: "input",
//     message: "What is the ID of the item you would like to buy?"
//   }).then(function(answer) {
//     // based on their answer, either call the bid or the post functions
//     if (answer.item_id.toUpperCase() === "POST") {
//       postAuction();
//     } else {
//       bidAuction();
//     }
//   });
// };
//
// // function to handle posting new items up for auction
// var postAuction = function() {
//   // prompt for info about the item being put up for auction
//   inquirer.prompt([{
//     name: "product_name",
//     type: "input",
//     message: "What is the item you would like to submit?"
//   }, {
//     name: "department_name",
//     type: "input",
//     message: "What category would you like to place your auction in?"
//   }, {
//     name: "price",
//     type: "input",
//     message: "What would you like your starting bid to be?",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }, {
//     name: "stock_quantity",
//     type: "input",
//     message: "What would you like your starting bid to be?",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }]).then(function(answer) {
//     // when finished prompting, insert a new item into the db with that info
//     connection.query("INSERT INTO auctions SET ?", {
//       item_id: answer.item_id,
//       product_name: answer.product_name,
//       department_name: answer.department_name,
//       price: answer.price,
//       stock_quantity: answer.stock_quantity
//     }, function(err) {
//       if (err) throw err;
//       console.log("Your auction was created successfully!");
//       // re-prompt the user for if they want to bid or post
//       start();
//     });
//   });
// };
//
// // function to get all items available for bidding, and allow you to place a bid
// var productCatalog = function() {
//   // query the database for all items that can be purchest
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     //This should print on all of the items in the Database
//
//
//
//
//
//
//
//
//
//     // once you have the items, prompt the user for which they'd like to bid on
//     inquirer.prompt([{
//         name: "choice",
//         type: "rawlist",
//         choices: function() {
//           var choiceArray = [];
//           for (var i = 0; i < results.length; i++) {
//             choiceArray.push(results[i].item_id);
//           }
//           return choiceArray;
//         },
//         message: "What auction would you like to place a bid in?"
//       },
//       {
//         name: "bid",
//         type: "input",
//         message: "How much would you like to bid?"
//       }
//     ]).then(function(answer) {
//       // get the information of the chosen item
//       var chosenItem;
//       for (var i = 0; i < results.length; i++) {
//         if (results[i].item_name === answer.choice) {
//           chosenItem = results[i];
//         }
//       }
//
//       // determine if bid was high enough
//       if (chosenItem.highest_bid < parseInt(answer.bid)) {
//         // bid was high enough, so update db, let the user know, and start over
//         connection.query("UPDATE auctions SET ? WHERE ?", [{
//           highest_bid: answer.bid
//         }, {
//           id: chosenItem.id
//         }], function(error) {
//           if (error) throw err;
//           console.log("Bid placed successfully!");
//           start();
//         });
//       } else {
//         // bid wasn't high enough, so apologize and start over
//         console.log("Your bid was too low. Try again...");
//         start();
//       }
//     });
//   });
// };
//
// // run the start function when the file is loaded to prompt the user
// start();
