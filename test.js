//Backend for website
//Website will have searchable images page, as well as main page with links and such
const express = require('express')
const app = express()
const port = 3000

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'project2',
    user     : 'root',
    password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM product', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))