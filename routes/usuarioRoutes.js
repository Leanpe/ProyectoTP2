import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateRol } from "../middlewares/validateRol.js";

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.post("/", usuarioController.createUsuario);
usuarioRoutes.post("/login", usuarioController.login);

usuarioRoutes.use(validateLogin);

usuarioRoutes.get("/me", usuarioController.getMe);
usuarioRoutes.put("/:id", usuarioController.updateUsuario);

usuarioRoutes.use(validateRol);

usuarioRoutes.get("/", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id", usuarioController.getUsuarioById);
usuarioRoutes.delete("/:id", usuarioController.deleteUsuario);

export default usuarioRoutes;
