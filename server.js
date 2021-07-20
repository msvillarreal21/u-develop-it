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

//Gets all the candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//To get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 21`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//Delete a candidate 
// db.query (`DELETE FROM candidates WHERE id =?`, 21, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;
// const params = [21, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log(result);
// });



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