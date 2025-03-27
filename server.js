import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lembo'
});
db.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Connected to database');
});

// Handle database connection errors
db.on('error', (err) => {
    console.error('Database error:', err);
});

app.listen(3306, () => {
    console.log('Server is running on puerto htt://localhost:3306');
    });