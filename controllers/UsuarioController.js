import UsuarioService from "../services/UsuarioService.js";

class UsuarioController {
  usuarioService = new UsuarioService();

  getAllUsuarios = async (req, res) => {
    try {
      const data = await this.usuarioService.getAllUsuariosService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.usuarioService.getUsuariosByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUsuario = async (req, res) => {
    try {
      const { nombre, email, password } = req.body;
      const data = await this.usuarioService.createUsuarioService({
        nombre,
        email,
        password,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).send({
          success: false,
          message: "El correo electrónico ya está registrado.",
        });
      } else {
        res.status(400).send({ success: false, message: error.message });
      }
    }
  };

  updateUsuario = async (req, res) => {
    try {
      const { nombre, password, email } = req.body; // Usamos los nombres correctos
      const { id } = req.params;
      const data = await this.usuarioService.updateUsuarioService({
        id,
        nombre,
        password,
        email,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.usuarioService.deleteUsuarioService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await this.usuarioService.loginService({
        email,
        password,
      });
      console.log("🚀 ~ UsuarioController ~ login= ~ data:", data);

      res.cookie("token", data);
      res
        .status(200)
        .send({ success: true, message: "Usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getMe = async (req, res) => {
    try {
      const { token } = req.cookie;
      const data = await this.usuarioService.getMe(token);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}
export default UsuarioController;
