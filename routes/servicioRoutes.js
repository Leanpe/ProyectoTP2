import { Router } from "express";
import ServicioController from "../controllers/ServicioController.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateRol } from "../middlewares/validateRol.js";

const servicioRoutes = Router();

const servicioController = new ServicioController();

servicioRoutes.use(validateLogin);

servicioRoutes.get("/", servicioController.getAllServicios);
servicioRoutes.get("/:id", servicioController.getServicioById);

servicioRoutes.use(validateRol);

servicioRoutes.post("/", servicioController.createServicio);
servicioRoutes.put("/:id", servicioController.updateServicio);
servicioRoutes.delete("/:id", servicioController.deleteServicio);

export default servicioRoutes;
