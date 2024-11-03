import { Router } from "express";
import ReservaController from "../controllers/ReservaController.js";

const reservaRoutes = Router();

const reservaController = new ReservaController();

reservaRoutes.get("/", reservaController.getAllReservas);
reservaRoutes.get("/:id", reservaController.getReservaById);
reservaRoutes.post("/", reservaController.createReserva);
reservaRoutes.put("/:id", reservaController.updateReserva);
reservaRoutes.delete("/:id", reservaController.deleteReserva);

export default reservaRoutes;
