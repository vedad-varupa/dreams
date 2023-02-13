const mysql = require('mysql');

 const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: "dreams"
});

db.connect((err) => {
  if (!err) {
    console.log('ConnectedToDatabases!')
  }
  else
    console.log(err.stack);
  return;
});

module.exports = db