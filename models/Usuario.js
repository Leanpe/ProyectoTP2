import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Usuario extends Model {}

Usuario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rol: {
      type: DataTypes.ENUM("cliente", "administrador"),
      allowNull: false,
      defaultValue: "cliente",
    },
  },
  {
    sequelize: connection, // La instancia de sequelize
    modelName: "Usuario",
    tableName: "usuarios",
    timestamps: true, // Incluye createdAt y updatedAt
  }
);

export default Usuario;
