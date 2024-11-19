import { verificarToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw error("No estas logueado");
    const verficado = verificarToken(token);
    req.usuario = verficado.data;
    next();
  } catch (error) {
    res.status(400).sende({ success: false, message: error.message });
  }
};
