const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'root',
    database: 'voyagesvoyages',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected')
})
