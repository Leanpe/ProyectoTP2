import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { validateLogin } from "../middlewares/validateLogin.js";

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.post("/", usuarioController.createUsuario);
usuarioRoutes.post("/login", usuarioController.login);
usuarioRoutes.get("/me", usuarioController.getMe);

usuarioRoutes.use(validateLogin);
usuarioRoutes.get("/", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id", usuarioController.getUsuarioById);
usuarioRoutes.put("/:id", usuarioController.updateUsuario);
usuarioRoutes.delete("/:id", usuarioController.deleteUsuario);

export default usuarioRoutes;
