// Import(require) connection file into this file
var connection = require ("./connection");

// function
function printToScreen(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    if (ob[key]) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


//ORM
var orm = {

  all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },


  // insert burger
  create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printToScreen(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    // update burger
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  };

  module.exports = orm;
