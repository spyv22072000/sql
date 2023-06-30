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
  ` select * from persons`,
  function(err, results,fields) {
    if(err) {console.error(err);}
    console.log(results);
    console.log(fields);

    connection.close();
    
  }
);
