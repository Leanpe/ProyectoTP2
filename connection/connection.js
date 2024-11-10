import { Sequelize } from "sequelize";

const connection = new Sequelize("ProyectoTP2", "sa", "lean123", {
  dialect: "mssql",
  port: 1433,
});

const test = async () => {
  try {
    await connection.authenticate();
    console.log("Conexion Exitosa!");
  } catch (error) {
    console.error("Error de Conexion: ", error.message);
  }
};

test();

export default connection;
