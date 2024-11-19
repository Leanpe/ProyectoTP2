import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const genToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const verificarToken = (token) => {
  const vericado = jwt.verify(token, JWT_SECRET);
  return vericado;
};
