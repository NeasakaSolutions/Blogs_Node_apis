// Cargar variables de entorno:
require("dotenv").config();

// Importaciones:
const { conexion } = require("./database/conexion"); // Conexion con mongoose
const express = require("express");
const cors = require("cors");

// Crear servidor Node:
const app = express(); // App de express
const puerto = 3900;

// Configurar cors:
app.use(cors()); // Se ejecuta el cors antes de cualquier ruta

// Convertir body a objeto js:
app.use(express.json()); // Recibir datos en formato json
app.use(express.urlencoded({extended:true})); // Recibir datos en formato urlencoded

// Inicializar app:
console.log("App de node arrancada.");

// Crear rutas:
const rutas_articulo = require("./rutas/articulo");

// Cargar las rutas
app.use("/api", rutas_articulo);

// Arranque controlado:
(async () => {
  try {
    await conexion(); // intenta conectar a Mongo
  } catch (error) {
    console.log(" No se pudo conectar a MongoDB. Servidor seguira activo.");
  }

  app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });
})();
