import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import reservaRoutes from "./reservaRoutes.js";
import servicioRoutes from "./servicioRoutes.js";

const routes = Router();

routes.use("/usuario", usuarioRoutes);
routes.use("/reserva", reservaRoutes);
routes.use("/servicio", servicioRoutes);

export default routes;
