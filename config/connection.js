// Used to connect Node to the DB created in MySQL
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'dbuv3kusoxr4knnj',
    password: 'bml4vlge9i2g32z8',
    database: 'burgers_db'
  });
};


connection.connect();

// Export the connection
module.exports = connection;
