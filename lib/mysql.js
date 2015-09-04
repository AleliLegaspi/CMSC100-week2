//used to automatically connect to database

var mysql = require('mysql');

module.exports = mysql.createConnection({//export means
  host: 'localhost',    //open in browser: localhost:5000/student
  user: 'cmsc100ef5l',
  password: 'cmsc100ef5l',
  database: 'cmsc100ef5l'


});