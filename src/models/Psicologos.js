const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
  "Psicologos",
  {
    psicologo_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apresentacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "psicologos",
    timestamps: false,
  }
);

module.exports = Psicologos;
