import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Servicio extends Model {}

Servicio.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Servicio",
    tableName: "servicios",
    timestamps: true, // createdAt y updatedAt
  }
);

export default Servicio;
