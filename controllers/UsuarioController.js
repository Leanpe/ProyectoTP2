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
      const data = await this.usuarioService.getUsuarioById(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUsuario = async (req, res, next) => {
    try {
      const { name, mail, pass } = req.body;
      const data = await this.usuarioService.createUsuarioService({
        name,
        mail,
        pass,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUsuario = async (req, res) => {
    try {
      const { name, pass, mail } = req.body;
      console.log(`🚀 ~ UserController ~ updateUser= ~ pass:`, pass);
      const { id } = req.params;
      const data = await this.usuarioService.updateUsuarioService({
        id,
        name,
        pass,
        mail,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
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
}

export default UsuarioController;
