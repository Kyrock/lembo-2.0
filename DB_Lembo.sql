use lembo;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    numero_telefonico VARCHAR(15),
    rol ENUM('usuario', 'admin', 'personal de apoyo') NOT NULL
);

-- luego sigue la de cultivos

CREATE TABLE cultivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    ubicacion ENUM('Parcela 3', 'Parcela 5', 'Invernadero Norte', 'Invernadero Central') NOT NULL,
    descripcion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- luego sigue la de insumos
CREATE TABLE insumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    cantidad INT NOT NULL,
    unidad ENUM('kilo', 'gramos', 'pascal', 'metros') NOT NULL,
    descripcion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
