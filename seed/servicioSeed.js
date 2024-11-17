import { Servicio } from "../models/models.js";

async function servicioSeed() {
  try {
    await Servicio.bulkCreate([
      {
        nombre: "Corte de cabello",
        descripcion: "Un corte profesional para cualquier tipo de cabello.",
        precio: 20.0,
      },
      {
        nombre: "Manicura",
        descripcion: "Cuidado y embellecimiento de uñas.",
        precio: 15.0,
      },
      {
        nombre: "Masaje relajante",
        descripcion: "Masaje de 60 minutos para relajar cuerpo y mente.",
        precio: 50.0,
      },
      {
        nombre: "Limpieza facial",
        descripcion: "Limpieza profunda para piel saludable.",
        precio: 30.0,
      },
      {
        nombre: "Depilación",
        descripcion: "Eliminación del vello con cera.",
        precio: 25.0,
      },
    ]);
    console.log("Servicios creados exitosamente");
  } catch (error) {
    console.error("Error al crear servicios: ", error.message);
  }
}

export default servicioSeed;
