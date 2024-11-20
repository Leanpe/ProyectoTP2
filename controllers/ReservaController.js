import ReservaService from "../services/ReservaService.js";

class ReservaController {
  reservaService = new ReservaService();

  // Obtener todas las reservas
  getAllReservas = async (req, res) => {
    try {
      const data = await this.reservaService.getAllReservasService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener una reserva por ID
  getReservaById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.reservaService.getReservaByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Crear una nueva reserva
  createReserva = async (req, res) => {
    try {
      const { fecha, usuarioId, servicioId } = req.body;
      const data = await this.reservaService.createReservaService({
        fecha,
        usuarioId,
        servicioId,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Actualizar una reserva
  updateReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const { fecha, usuarioId, servicioId } = req.body;
      const data = await this.reservaService.updateReservaService({
        id,
        fecha,
        usuarioId,
        servicioId,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Eliminar una reserva
  deleteReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.reservaService.deleteReservaService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener todas las reservas por usuarioId
  getReservasByUsuarioId = async (req, res) => {
    try {
      const { usuarioId } = req.params;
      const data = await this.reservaService.getReservasByUsuarioId(usuarioId);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Obtener todas las reservas por servicioId
  getReservasByServicioId = async (req, res) => {
    try {
      const { servicioId } = req.params;
      const data = await this.reservaService.getReservasByServicioId(
        servicioId
      );
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ReservaController;
