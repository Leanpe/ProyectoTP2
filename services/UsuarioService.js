import { Usuario } from "../models/models.js";

class UsuarioService {
  getAllUsuariosService = async () => {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["name", "mail"],
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
        attributes: ["name", "mail"],
      });
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
      const { id, name, pass, mail } = data;
      const usuarios = await Usuario.update(
        { name, pass, mail },
        {
          where: { id },
        }
      );
      return usuarios;
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

      // Eliminar el usuario
      await Usuario.destroy({
        where: { id },
      });

      return { message: "Usuario eliminado exitosamente" };
    } catch (error) {
      throw error;
    }
  };
}

export default UsuarioService;
