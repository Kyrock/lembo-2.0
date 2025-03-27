import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// Configurar middleware
app.use(express.json()); // Permitir el uso de JSON en las peticiones
app.use(cors()); // Evitar problemas con CORS

// Conexión a MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Asegúrate de reemplazar con tus credenciales
    password: "root", // Asegúrate de reemplazar con tu contraseña
    database: "lembo",
    port: 3307, // Confirma que este es el puerto correcto de MySQL
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

    const { nombre, tipo, ubicacion, descripcion, usuario_id } = req.body;

    if (!nombre || !tipo || !ubicacion || !descripcion || !usuario_id) {
        return res.status(400).json({ error: "❌ Todos los campos, incluyendo usuario_id, son obligatorios." });
    }

    const sql = "INSERT INTO cultivos (nombre, tipo, ubicacion, descripcion, usuario_id) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [nombre, tipo, ubicacion, descripcion, usuario_id], (err, result) => {
        if (err) {
            console.error("❌ Error al insertar en la base de datos:", err);
            return res.status(500).json({ error: "❌ Error al agregar cultivo" });
        }
        res.status(201).json({ message: "✅ Cultivo agregado correctamente", id: result.insertId });
    });
});

// Ruta para obtener todos los cultivos
app.get("/api/cultivos", (req, res) => {
    const sql = "SELECT * FROM cultivos";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Error al obtener cultivos:", err);
            return res.status(500).json({ error: "❌ Error al obtener cultivos" });
        }
        res.json(results);
    });
});

// Ruta para agregar insumos
app.post("/api/insumo", (req, res) => {
    console.log("📩 Datos recibidos:", req.body);

    const { nombre, id, valor, cantidad, unidad, descripcion } = req.body;

    if (!nombre || !id || !valor || !cantidad || !unidad) {
        return res.status(400).json({ error: "❌ Todos los campos obligatorios deben estar llenos." });
    }

    const sql = `INSERT INTO insumos (nombre, id, valor_unitario, cantidad, unidad_medida, descripcion) VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nombre, id, valor, cantidad, unidad, descripcion], (err, results) => {
        if (err) {
            console.error("❌ Error al insertar insumo:", err);
            return res.status(500).json({ error: "❌ Error al crear el insumo" });
        }
        res.status(201).json({ message: "✅ Insumo creado exitosamente", id: results.insertId });
    });
});

// Ruta para obtener todos los insumos
app.get("/api/insumo", (req, res) => {
    const sql = "SELECT * FROM insumos";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Error al obtener insumos:", err);
            return res.status(500).json({ error: "❌ Error al obtener insumos" });
        }
        res.json(results);
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
