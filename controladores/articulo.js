// Metodo de prueba para verificar que el controlador funciona
const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Soy una accion de prueba en el controlador de articulos."
    });
}

// Exporta los metodos del controlador
module.exports = {
    prueba
}



