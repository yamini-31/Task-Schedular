const mysql = require('mysql');
const express = require('express');
const app = express();

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost', // or your server IP
    user: 'root',      // MySQL username
    password: 'your_password',  // MySQL password
    database: 'todo_database'   // Your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// API endpoint to retrieve tasks from the database
app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Server listening
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
