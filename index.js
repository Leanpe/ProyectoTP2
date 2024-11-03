import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/app", routes);

// app.get("/", (req, res) => {
//   res.send("¡Bienvenido a mi API!");
// });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
