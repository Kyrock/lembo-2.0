import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// Configurar middleware
app.use(express.json()); // Permitir el uso de JSON en las peticiones
app.use(cors()); // Evitar problemas con CORS

// Conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lembo'

});

// Manejo de errores en la conexión
db.connect(err => {
    if (err) {
        console.error("❌ Error de conexión a MySQL:", err);
        return;
    }
    console.log("✅ Conectado a la base de datos MySQL");
});

// Ruta para agregar cultivos
app.post("/api/cultivos", (req, res) => {
    console.log("📩 Datos recibidos:", req.body);

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
});