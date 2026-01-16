// Importaciones:
const express = require("express");
const router = express.Router();
const ArticuloControlador = require("../controladores/articulo");

// Rutas de prueba:
router.get("/ruta-de-prueba", ArticuloControlador.prueba);

// Ruta para crear articulos:
router.post("/crear", ArticuloControlador.guardar);
router.get("/articulos", ArticuloControlador.listar);

// Exportacion de las rutas:
module.exports = router;
