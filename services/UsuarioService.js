import { Usuario } from "../models/models.js";
import { genToken, verificarToken } from "../utils/token.js";

class UsuarioService {
  getAllUsuariosService = async () => {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["nombre", "email"],
      });
      return usuarios;
    } catch (error) {
      throw error;
    }
  };

  getUsuariosByIdService = async (id) => {
    try {
      const usuarios = await Usuario.findAll({
        where: { id },
        attributes: ["nombre", "email"],
      });
      if (usuarios.length == 0) throw Error("Usuario no Encontrado");
      return usuarios;
    } catch (error) {
      throw error;
    }
  };

  createUsuarioService = async (user) => {
    try {
      const newUsuario = await Usuario.create(user);
      return newUsuario;
    } catch (error) {
      throw error;
    }
  };

  updateUsuarioService = async (data) => {
    try {
      const { id, nombre, password, email } = data;
      const [affectedRows] = await Usuario.update(
        { nombre, password, email },
        {
          where: { id },
        }
      );
      if (affectedRows === 0) throw Error("Usuario no Encontrado");
      return { message: "Usuario Actualizado" };
    } catch (error) {
      throw error;
    }
  };

  deleteUsuarioService = async (id) => {
    try {
      // Buscar el usuario para confirmar que existe
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }

      await Usuario.destroy({
        where: { id },
      });

      return { message: "Usuario eliminado exitosamente" };
    } catch (error) {
      throw error;
    }
  };

  loginService = async (usuario) => {
    try {
      const { email, password } = usuario;

      const usuarioLogin = await Usuario.findOne({ where: { email } });
      if (!usuarioLogin) throw new Error("Usuario no Existe");

      const comparePass = await usuarioLogin.compare(password);
      if (!comparePass) throw new Error("Email o Contraseña incorrectos");

      const payLoad = {
        id: usuarioLogin.id,
        email: usuarioLogin.email,
      };

      const token = genToken(payLoad);
      return token;
    } catch (error) {
      throw error;
    }
  };

  getMe = async (token) => {
    try {
      const verficado = verificarToken(token);
      return verficado.data;
    } catch (error) {
      throw error;
    }
  };
}

export default UsuarioService;
