import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'mysql.milliganis.info',
  user: 'capstone',
  password: '49doves',
  database: 'CAP_TEST'
});
  
export default db;