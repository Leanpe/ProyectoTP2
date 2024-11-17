import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_DIALECT,
  DB_PASS,
  DB_PORT,
  DB_USER,
} from "../config/config.js";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: DB_DIALECT,
  port: DB_PORT,
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
