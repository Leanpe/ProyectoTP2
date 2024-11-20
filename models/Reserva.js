import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Reserva extends Model {}

Reserva.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },

    servicioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "servicios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: connection,
    modelName: "Reserva",
    tableName: "reservas",
    timestamps: true,
  }
);

export default Reserva;
