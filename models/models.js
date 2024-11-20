import Usuario from "./Usuario.js";
import Reserva from "./Reserva.js";
import Servicio from "./Servicio.js";

Usuario.hasMany(Reserva, { foreignKey: "usuarioId" });
Reserva.belongsTo(Usuario, { foreignKey: "usuarioId" });
Servicio.hasMany(Reserva, { foreignKey: "servicioId" });
Reserva.belongsTo(Servicio, { foreignKey: "servicioId" });

export { Usuario, Reserva, Servicio };
