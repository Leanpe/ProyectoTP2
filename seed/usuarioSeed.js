import { Usuario } from "../models/models.js";

async function usuarioSeed() {
  try {
    await Usuario.bulkCreate([
      {
        nombre: "Administrador",
        email: "admin@example.com",
        password: "admin123",
        rol: "administrador",
      },
      {
        nombre: "Usuario Regular",
        email: "user1@example.com",
        password: "user123",
        rol: "cliente",
      },
      {
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        password: "juan1234",
        rol: "cliente",
      },
      {
        nombre: "Ana Gómez",
        email: "ana.gomez@example.com",
        password: "ana12345",
        rol: "cliente",
      },
      {
        nombre: "María López",
        email: "maria.lopez@example.com",
        password: "maria678",
        rol: "cliente",
      },
    ]);
    console.log("Usuarios creados exitosamente");
  } catch (error) {
    console.log(`🚀 ~ roleSeed ~ error:`, error);
  }
}

export default usuarioSeed;
