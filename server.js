const mysql = require('mysql2');
const express = require ('express');

const PORT = process.env.PORT || 3001;
const app = express ();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection (
    {
        host:'localhost',
        //Your Mysql username,
        user: 'root',
        //Your Mysql password,
        password: 'A1P12J2021!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
app.get('/', (req, res) => {
    res.json ({
        message: "Hello World"
    });
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});