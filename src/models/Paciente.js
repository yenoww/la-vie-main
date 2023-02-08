const db = require("../database");
const { DataTypes } = require("sequelize");

const Paciente = db.define("Pacientes", {
  paciente_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

// Paciente.sync()

module.exports = Paciente;
