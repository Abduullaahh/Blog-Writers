const mysql = require('mysql');

const connection = mysql.createConnection
(
    {
        host : 'brmxnusdsvm38ndds14b-mysql.services.clever-cloud.com',
        database : 'brmxnusdsvm38ndds14b',
        user : 'uhwuhrolh92ktjjm',
        password : '9LMq51eUKDL2lnu3WvAH',
        port : '3306',
    }
)

connection.connect((err) => {
    if(err) throw err;
    console.log('DataBase Connected');
})

module.exports = {connection};