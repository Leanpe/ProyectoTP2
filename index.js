import express from "express";
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/app", routes);

// app.get("/", (req, res) => {
//   res.send("¡Bienvenido a mi API!");
// });
connection.sync();
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
