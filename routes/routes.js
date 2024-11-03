import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import reservaRoutes from "./reservaRoutes.js";
import servicioOfrecidoRoutes from "./servicioOfrecidoRoutes.js";

const routes = Router();

routes.use("/usuario", usuarioRoutes);
routes.use("/reserva", reservaRoutes);
routes.use("/servicio", servicioOfrecidoRoutes);

export default routes;
