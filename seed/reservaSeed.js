import { Reserva } from "../models/models.js";

async function reservaSeed() {
  try {
    await Reserva.bulkCreate([
      {
        fecha: new Date(2024, 10, 20, 15, 0), // Ejemplo: 20 de noviembre de 2024 a las 15:00
        usuarioId: 1, // Mismo usuarioId
        servicioId: 1, // ID del servicio relacionado
      },
      {
        fecha: new Date(2024, 10, 21, 10, 30),
        usuarioId: 2,
        servicioId: 3,
      },
      {
        fecha: new Date(2024, 10, 22, 14, 0),
        usuarioId: 3,
        servicioId: 2,
      },
      {
        fecha: new Date(2024, 10, 23, 16, 45),
        usuarioId: 4,
        servicioId: 5,
      },
      {
        fecha: new Date(2024, 10, 24, 11, 15),
        usuarioId: 5,
        servicioId: 4,
      },
      {
        fecha: new Date(2024, 10, 25, 9, 30),
        usuarioId: 1,
        servicioId: 5,
      },
      {
        fecha: new Date(2024, 10, 26, 12, 0),
        usuarioId: 1,
        servicioId: 3,
      },
      {
        fecha: new Date(2024, 10, 27, 18, 45),
        usuarioId: 1,
        servicioId: 2,
      },
    ]);
    console.log("Reservas creadas exitosamente");
  } catch (error) {
    console.error("Error al crear reservas: ", error.message);
  }
}

export default reservaSeed;
