import mysql from 'mysql';

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7239441',
  password: 'lI1KZJjzVK',
  database: 'sql7239441'
});

connection.connect(function(err) {
  if (!err) {
    console.log('Database connected');
  } else {
    console.log('No connection with database');
  }
});
export default connection;
