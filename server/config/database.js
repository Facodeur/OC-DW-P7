const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE
});

db.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log('Connecting in database...')
    }
});

module.exports = db;