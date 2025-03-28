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

app.post('/insumo', (req, res) => {
    const {name, id, valor, cantidad, unidad, descripcion} = req.body;
    db.query(
        'INSERT INTO insumo (name, id, valor, cantidad, unidad, descripcion) VALUES (?, ?, ?, ?, ?, ?)',
        [name, id, valor, cantidad, unidad, descripcion],
        (err, results) => {
            if(err){
                console.log('Error inserting user: ', err);
                res.status(500).json({error: 'Error inserting user'});
            }else{
                res.status(201).json({id: results.insertId, name, id, valor, cantidad, unidad, descripcion});
            }
        }
    );
});
app.listen(5500, () => {
    console.log('Server is running on puerto htt://localhost:5500');
    });