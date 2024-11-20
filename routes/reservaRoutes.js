import { Router } from "express";
import ReservaController from "../controllers/ReservaController.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateRol } from "../middlewares/validateRol.js";

const reservaRoutes = Router();

const reservaController = new ReservaController();

reservaRoutes.use(validateLogin);

reservaRoutes.get(
  "/usuario/:usuarioId",
  reservaController.getReservasByUsuarioId
);
reservaRoutes.get("/:id", reservaController.getReservaById);

reservaRoutes.use(validateRol);

reservaRoutes.get(
  "/servicio/:servicioId",
  reservaController.getReservasByServicioId
);
reservaRoutes.get("/", reservaController.getAllReservas);
reservaRoutes.post("/", reservaController.createReserva);
reservaRoutes.put("/:id", reservaController.updateReserva);
reservaRoutes.delete("/:id", reservaController.deleteReserva);

export default reservaRoutes;
