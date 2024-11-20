import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Servicio extends Model {}

Servicio.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0,
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Servicio",
    tableName: "servicios",
    timestamps: true,
  }
);

export default Servicio;
