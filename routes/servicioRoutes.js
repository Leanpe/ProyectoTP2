import { Router } from "express";
import ServicioController from "../controllers/ServicioController.js";

const servicioRoutes = Router();

const servicioController = new ServicioController();

servicioRoutes.get("/", servicioController.getAllServicios);
servicioRoutes.get("/:id", servicioController.getServicioById);
servicioRoutes.post("/", servicioController.createServicio);
servicioRoutes.put("/:id", servicioController.updateServicio);
servicioRoutes.delete("/:id", servicioController.deleteServicio);

export default servicioRoutes;
