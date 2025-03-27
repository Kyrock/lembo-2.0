const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json()); // Permitir JSON en las peticiones
app.use(cors()); // Evitar problemas con CORS

// aca esta la  Conexión a MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Reemplaza con tu usuario de MySQL
    password: "", // Reemplaza con tu contraseña
    database: "lembo",
});

db.connect(err => {
    if (err) {
        console.error("Error de conexión a MySQL:", err);
        return;
    }
    console.log("Conectado a MySQL");
});

// Ruta para agregar cultivos
app.post("/api/cultivos", (req, res) => {
    const { nombre, tipo, ubicacion, descripcion } = req.body;

    if (!nombre || !tipo || !ubicacion) {
        return res.status(400).json({ message: "Todos los campos obligatorios deben estar llenos." });
    }

    const sql = "INSERT INTO cultivos (nombre, tipo, ubicacion, descripcion) VALUES (?, ?, ?, ?)";
    db.query(sql, [nombre, tipo, ubicacion, descripcion], (err, result) => {
        if (err) {
            console.error("Error al insertar en la base de datos:", err);
            return res.status(500).json({ message: "Error al agregar cultivo" });
        }
        res.status(201).json({ message: "Cultivo agregado correctamente", id: result.insertId });
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
