import Usuario from "../models/Usuario.js";
import { verificarToken } from "../utils/token.js";

export const validateRol = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const verificado = verificarToken(token);
    const { id } = verificado.data;

    const usuario = await Usuario.findOne({
      where: { id },
      attributes: ["rol"],
    });

    if (usuario.rol !== "administrador")
      throw Error("No tienes permiso para realizar esta acción.");

    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
