const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test'
});
pool.getConnection((error, connection) => {
    connection.query('select * from user where id=1', (error, result, fields) => {
        if (error) throw error;
        for (let i = 0; i < result.length; i++) {
            console.log("username:" + result[i].username);
            console.log("password:" + result[i].password);
        };
        connection.release();
        pool.end(function(err) {
            // all connections in the pool have ended
        });
    });
    // console.log(123);
});
// 连接池获取连接时触发的事件
pool.on('acquire', function(connection) {
    console.log('Connection %d acquired', connection.threadId);
});
// 连接池，连接时触发事件
pool.on('connection', function(connection) {
    connection.query('select * from user', (error, result) => {
        console.log(result.length);
    })
});
// 连接排队时触发的事件
pool.on('enqueue', function() {
    console.log('Waiting for available connection slot');
});
// 连接池释放连接时触发的事件
pool.on('release', function(connection) {
    console.log('Connection %d released', connection.threadId);
});