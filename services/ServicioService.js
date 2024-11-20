import { Servicio } from "../models/models.js";

class ServicioService {
  // Obtener todos los servicios
  getAllServiciosService = async () => {
    try {
      const servicios = await Servicio.findAll({
        attributes: ["nombre", "descripcion", "precio"],
      });
      return servicios;
    } catch (error) {
      throw error;
    }
  };

  // Obtener un servicio por ID
  getServicioByIdService = async (id) => {
    try {
      const servicio = await Servicio.findByPk(id, {
        attributes: ["nombre", "descripcion", "precio"],
      });
      if (!servicio) throw Error("Servicio no Encontrado");
      return servicio;
    } catch (error) {
      throw error;
    }
  };

  // Crear un nuevo servicio
  createServicioService = async (servicioData) => {
    try {
      const newServicio = await Servicio.create(servicioData);
      return newServicio;
    } catch (error) {
      throw error;
    }
  };

  // Actualizar un servicio existente
  updateServicioService = async (data) => {
    try {
      const { id, nombre, descripcion, precio } = data;
      const [affectedRows] = await Servicio.update(
        { nombre, descripcion, precio },
        {
          where: { id },
        }
      );
      if (affectedRows === 0) throw Error("Servicio no Encontrado");
      return { message: "Servicio Actualizado" };
    } catch (error) {
      throw error;
    }
  };

  // Eliminar un servicio
  deleteServicioService = async (id) => {
    try {
      const servicio = await Servicio.findByPk(id);
      if (!servicio) {
        throw new Error("Servicio no encontrado");
      }

      await Servicio.destroy({
        where: { id },
      });

      return { message: "Servicio eliminado exitosamente" };
    } catch (error) {
      throw error;
    }
  };
}

export default ServicioService;
