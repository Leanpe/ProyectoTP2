import { Reserva } from "../models/models.js";
import { Usuario } from "../models/models.js";
import { Servicio } from "../models/models.js";

class ReservaService {
  // Obtener todas las reservas
  getAllReservasService = async () => {
    try {
      const reservas = await Reserva.findAll({
        attributes: ["fecha"],
        include: [
          { model: Usuario, attributes: ["nombre", "email"] }, // Incluir datos del usuario
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
        attributes: ["fecha"],
        include: [
          { model: Usuario, attributes: ["nombre", "email"] }, // Incluir datos del usuario
          { model: Servicio, attributes: ["nombre", "descripcion", "precio"] }, // Incluir datos del servicio
        ],
      });
      if (!reserva) throw Error("Reserva no Encontrada");
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
      const [affectedRows] = await Reserva.update(
        { fecha, usuarioId, servicioId },
        {
          where: { id },
        }
      );
      if (affectedRows === 0) throw Error("Reserva no Encontrada");
      return { message: "Reserva Actualizado" };
    } catch (error) {
      throw error;
    }
  };

  // Eliminar una reserva
  deleteReservaService = async (id) => {
    try {
      const reserva = await Reserva.findByPk(id);
      if (!reserva) {
        throw new Error("Reserva no encontrada");
      }

      await Reserva.destroy({
        where: { id },
      });

      return { message: "Reserva eliminada exitosamente" };
    } catch (error) {
      throw error;
    }
  };

  getReservasByUsuarioId = async (usuarioId) => {
    try {
      const usuarioExiste = await Usuario.findByPk(usuarioId);
      if (!usuarioExiste) throw new Error("Usuario no encontrado");

      const reservas = await Reserva.findAll({
        where: { usuarioId },
        attributes: ["fecha"],
        include: [
          { model: Servicio, attributes: ["nombre", "descripcion", "precio"] },
        ],
      });

      if (reservas.length === 0)
        throw new Error("No se encontraron reservas para este usuario");
      return reservas;
    } catch (error) {
      throw error;
    }
  };

  // Obtener reservas por servicioId
  getReservasByServicioId = async (servicioId) => {
    try {
      const servicioExiste = await Servicio.findByPk(servicioId);
      if (!servicioExiste) throw new Error("Servicio no encontrado");

      const reservas = await Reserva.findAll({
        where: { servicioId },
        attributes: ["fecha"],
        include: [{ model: Usuario, attributes: ["nombre", "email"] }],
      });

      if (reservas.length === 0)
        throw new Error("No se encontraron reservas para este servicio");
      return reservas;
    } catch (error) {
      throw error;
    }
  };
}
export default ReservaService;
