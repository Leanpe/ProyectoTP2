import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt, { hash } from "bcrypt";

class Usuario extends Model {
  compare = async (password) => {
    const data = await bcrypt.compare(password, this.password);
    return data;
  };
}

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
        len: {
          args: [15, 50], // Longitud mínima y máxima
          msg: "El email debe tener entre 15 y 50 caracteres.",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 50], // Longitud mínima y máxima
          msg: "La contraseña debe tener entre 8 y 50 caracteres.",
        },
      },
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

Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt();
  usuario.salt = salt;
  const hash = await bcrypt.hash(usuario.password, salt);
  usuario.password = hash;
});

export default Usuario;
