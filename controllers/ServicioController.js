import ServicioService from "../services/ServicioService.js";

class ServicioController {
  servicioService = new ServicioService();

  // Obtener todos los servicios
  getAllServicios = async (req, res) => {
    try {
      const data = await this.servicioService.getAllServiciosService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener un servicio por ID
  getServicioById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.servicioService.getServicioByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear un nuevo servicio
  createServicio = async (req, res) => {
    try {
      const { nombre, descripcion, precio } = req.body;
      const data = await this.servicioService.createServicioService({
        nombre,
        descripcion,
        precio,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Actualizar un servicio
  updateServicio = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion, precio } = req.body;
      const data = await this.servicioService.updateServicioService({
        id,
        nombre,
        descripcion,
        precio,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar un servicio
  deleteServicio = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.servicioService.deleteServicioService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ServicioController;
