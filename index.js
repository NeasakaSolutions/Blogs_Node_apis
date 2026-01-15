// Cargar variables de entorno:
require("dotenv").config();

// Importaciones:
const { conexion } = require("./database/conexion"); // Conexion a la db
const express = require("express");
const cors = require("cors");

// Inicializar app:
console.log("App de node arrancada.");

// Conectar a la db:
conexion();

// Crear servidor Node:
const app = express(); // App de express
const puerto = 3900;

// Configurar cors:
app.use(cors()); // Se ejecuta el cors antes de cualquier ruta

// Convertir body a objeto js:
app.use(express.json());

// Crear rutas:
// app.get("Nombre de la ruta"), (solicitud, respuesta)
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando.");

    return res.status(200).send(`
        <div>
            <h3>Probando ruta de nodejs</h3>
            <p>Creando api rest con node</p>
        </div>
    `);
});

// Crear servidor y escuchar peticiones:
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
