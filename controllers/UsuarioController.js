import UsuarioService from "../services/UsuarioService.js";

class UsuarioController {
  usuarioService = new UsuarioService();

  getAllUsers = async (req, res) => {
    try {
      const data = await this.usuarioService.getAllUsersService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.usuarioService.getUserByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { name, mail, pass } = req.body;
      const data = await this.usuarioService.createUserService({
        name,
        mail,
        pass,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { name, pass, mail } = req.body;
      console.log(`🚀 ~ UserController ~ updateUser= ~ pass:`, pass);
      const { id } = req.params;
      const data = await this.usuarioService.updateUserService({
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

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.usuarioService.deleteUserService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
