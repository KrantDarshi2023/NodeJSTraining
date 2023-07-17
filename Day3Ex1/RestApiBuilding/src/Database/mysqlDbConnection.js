import mysql from 'mysql2'



export const connectionSql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'EmployeeDB',
    port: 3306
}).promise();
connectionSql.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

// export default dbSqlConnection;