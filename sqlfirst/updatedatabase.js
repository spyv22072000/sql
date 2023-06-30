const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  database: 'mytestdb',
  password:'mypass',
});

// simple query
connection.query(
  `CREATE TABLE IF NOT EXISTS persons(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
  )`,
  function(err, results) {
    if(err) {console.error(err);}
    console.log("table created sucessfully");
    connection.close();
  }
);
