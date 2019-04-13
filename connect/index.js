const mysql = require('mysql');

const pool = new mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'xdw054013',
    database: 'books',
    port: 3306
})

const connectMysql = function (sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (error, results, fields) {
            connection.release();
            callback(error, results, fields)
        })
    })
}

module.exports = connectMysql
