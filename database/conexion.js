// Importacion de librerias
const mongoose = require("mongoose"); // La libreria mongoose se guarda en una variable

// Funcion asincrona que se encarga de conectar con la base de datos
const conexion = async() => {
    
    try{
        // Conexion a la db
        //await mongoose.connect("mongodb://localhost:27017/mi_blog");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado correctamente a la base de datos.");

    } catch(error){
        console.log(error); // Error real dentro de la consola
        throw new Error("No se ha podido conectar a la base de datos.");
    };
};

// Exporta la funcion para poder usarla en otros archivos del proyecto
module.exports = {
    conexion
};
