// Importaciones
const validator = require("validator");
const Articulo = require("../modelos/Articulo");

// Metodo de prueba para verificar que el controlador funciona
const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Soy una accion de prueba en el controlador de articulos."
    });
}

// Metodo para crear un articulo
const guardar = async(req, res) => {

    // Recoger parametros por post a guardar:
    let parametros = req.body;

    // Validar los datos:
    try{
        // Validar si los datos recibidos estan vacios:
        let validar_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, {min: 5, max: 20});
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        // En caso de que los datos lleguen vacios:
        if(!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la informacion.");
        };

    } catch(error){
        return res.status(400).json({
            status: "Error",
            mensaje: "Faltan datos por enviar." 
        });
    };

    // Crear el objeto a guardar y crear los parametros:
    const articulo = new Articulo(parametros);

    try {
        // Guardar el articulo en la db:
        const articuloGuardado = await articulo.save();

        // Retorno:
        return res.status(200).json({
            status: "success",
            mensaje: "Articulo guardado con exito.",
            articulo: articuloGuardado 
        });
    } catch(error) {
        // Retorno:
        return res.status(400).json({
            status: "Error",
            mensaje: "No se guardo el articulo."
        });
    };
    
};

// Exporta los metodos del controlador
module.exports = {
    prueba,
    guardar
}



