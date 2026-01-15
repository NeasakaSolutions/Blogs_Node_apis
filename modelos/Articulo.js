// Importacion de mongoose:
const { Schema, model } = require("mongoose");

// Esquema que describe los campos de un articulo:
const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    },
});

// Exporta el modelo para poder crear, leer, actualizar y borrar artículos:
module.exports = model("Articulo", ArticuloSchema, "articulos");