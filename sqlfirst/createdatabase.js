const mysql = require('mysql2');
const { argv } = require('process');

const insert={
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  database: 'mytestdb',
  password:'mypass',
});

// simple query
connection.query(
  `INSERT INTO persons (name,age,city) VALUES(
    '${insert.name}',
    ${insert.age},
    '${insert.city}')`
  ,
  function(err, results) {
    if(err) {console.error(err);}
    console.log(results);
    console.log("inserted sucessfull")
    connection.close();
  }
);
