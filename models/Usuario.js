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

Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt();
  usuario.salt = salt;
  const hash = await bcrypt.hash(usuario.password, salt);
  usuario.password = hash;
});

export default Usuario;
