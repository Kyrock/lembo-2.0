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
    database: 'lembo',
    port: 3307
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

// Route to create a new supply
app.post('/insumo', (req, res) => {
    const { name, id, valor, cantidad, unidad, descripcion } = req.body;

    const query = 'INSERT INTO insumos (nombre, id, valor_unitario, cantidad, unidad_medida, descripcion) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [name, id, valor, cantidad, unidad, descripcion], (err, results) => {
        if (err) {
            console.error('Error al insertar insumo:', err);
            res.status(500).json({ error: 'Error al crear el insumo' });
            return;
        }
        res.status(201).json({ message: 'Insumo creado exitosamente', id: results.insertId });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});