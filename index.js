import express from "express";
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import usuarioSeed from "./seed/usuarioSeed.js";
import reservaSeed from "./seed/reservaSeed.js";
import servicioSeed from "./seed/servicioSeed.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Rutas
app.use("/app", routes);

await connection.sync({ force: true });

await usuarioSeed();
await servicioSeed();
await reservaSeed();
// Iniciar el servidor
app.listen(SERVER_PORT, () => {
  console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
});
