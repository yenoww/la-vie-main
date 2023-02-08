const Psicologo = require('./Psicologos')
const Paciente = require('./Paciente')
const Atendimentos = require('./Atendimento')

Atendimentos.belongsTo(Psicologo, {
  foreignKey: 'id_psicologo'
})

Atendimentos.belongsTo(Paciente, {
  foreignKey: 'id_paciente'
})

Psicologo.hasMany(Atendimentos, {
  foreignKey: 'id_psicologo'
})

Paciente.hasMany(Atendimentos, {
  foreignKey: 'id_paciente'
})

module.exports = {
  Psicologo,
  Paciente,
  Atendimentos
}