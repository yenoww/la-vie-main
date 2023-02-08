const db = require("../database");
const { DataTypes } = require("sequelize");
const Paciente = require("./Paciente");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id_atendimento:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_psicologo: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "psicologo_id",
      },
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: Paciente,
        key: "paciente_id",
      },
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);

module.exports = Atendimentos;
