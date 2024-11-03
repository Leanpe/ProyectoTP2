import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.get("/", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id", usuarioController.getUsuarioById);
usuarioRoutes.post("/", usuarioController.createUsuario);
usuarioRoutes.put("/:id", usuarioController.updateUsuario);
usuarioRoutes.delete("/:id", usuarioController.deleteUsuario);

export default usuarioRoutes;
