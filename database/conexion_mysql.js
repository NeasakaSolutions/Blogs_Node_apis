// Conexion con MySQL
const mysql = require("mysql2/promise");

const conexion = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log("Conectado correctamente a MySQL");
    return connection;

  } catch (error) {
    console.error(error);
    throw new Error("No se pudo conectar a MySQL");
  }
};

module.exports = { conexion };