import { Reserva } from "../models/models.js";

class ReservaService {
  // Obtener todas las reservas
  getAllReservasService = async () => {
    try {
      const reservas = await Reserva.findAll({
        attributes: ["fecha", "usuarioId", "servicioId"],
        include: [
          { model: Usuario, attributes: ["name", "mail"] }, // Incluir datos del usuario
          { model: Servicio, attributes: ["nombre", "descripcion", "precio"] }, // Incluir datos del servicio
        ],
      });
      return reservas;
    } catch (error) {
      throw error;
    }
  };

  // Obtener una reserva por ID
  getReservaByIdService = async (id) => {
    try {
      const reserva = await Reserva.findByPk(id, {
        attributes: ["fecha", "usuarioId", "servicioId"],
        include: [
          { model: Usuario, attributes: ["name", "mail"] }, // Incluir datos del usuario
          { model: Servicio, attributes: ["nombre", "descripcion", "precio"] }, // Incluir datos del servicio
        ],
      });
      return reserva;
    } catch (error) {
      throw error;
    }
  };

  // Crear una nueva reserva
  createReservaService = async (reservaData) => {
    try {
      const newReserva = await Reserva.create(reservaData);
      return newReserva;
    } catch (error) {
      throw error;
    }
  };

  // Actualizar una reserva existente
  updateReservaService = async (data) => {
    try {
      const { id, fecha, usuarioId, servicioId } = data;
      const updatedReserva = await Reserva.update(
        { fecha, usuarioId, servicioId },
        {
          where: { id },
        }
      );
      return updatedReserva;
    } catch (error) {
      throw error;
    }
  };

  // Eliminar una reserva
  deleteReservaService = async (id) => {
    try {
      // Buscar la reserva para confirmar que existe
      const reserva = await Reserva.findByPk(id);
      if (!reserva) {
        throw new Error("Reserva no encontrada");
      }

      // Eliminar la reserva
      await Reserva.destroy({
        where: { id },
      });

      return { message: "Reserva eliminada exitosamente" };
    } catch (error) {
      throw error;
    }
  };
}

export default ReservaService;
