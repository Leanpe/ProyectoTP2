import { Router } from "express";
import ServicioOfrecidoController from "../controllers/ServicioOfrecidoController.js";

const servicioOfrecidoRoutes = Router();

const servicioOfrecidoController = new ServicioOfrecidoController();

servicioOfrecidoRoutes.get(
  "/",
  servicioOfrecidoController.getAllServicioOfrecido
);
servicioOfrecidoRoutes.get(
  "/:id",
  servicioOfrecidoController.getServicioOfrecidoById
);
servicioOfrecidoRoutes.post(
  "/",
  servicioOfrecidoController.createServicioOfrecido
);
servicioOfrecidoRoutes.put(
  "/:id",
  servicioOfrecidoController.updateServicioOfrecido
);
servicioOfrecidoRoutes.delete(
  "/:id",
  servicioOfrecidoController.deleteServicioOfrecido
);

export default servicioOfrecidoRoutes;
