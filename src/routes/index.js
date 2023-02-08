const express = require('express')
const auth = require('../middlewares/auth')
const requestLog = require('../middlewares/requestLog')
const authLoginValidation = require('../validations/auth/login')
const authController = require('../controllers/authController')
const pacientesController = require('../controllers/pacientesController')
const psicologosController = require('../controllers/psicologosController')
const PsicologosCreateValidation = require('../validations/psicologos/create')
const atendimentoController = require('../controllers/atendimentoControllers')
const routes = express.Router()

routes.post('/login', authLoginValidation, authController.login)

routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacientesId)
routes.post('/pacientes', pacientesController.cadastrarPacientes)
routes.put('/pacientes/:id', pacientesController.atualizarPacientes)
routes.delete('/pacientes/:id', pacientesController.deletarPacientes)

routes.get('/psicologos', requestLog, psicologosController.listarPsicologos)
routes.get('/psicologos/:id', psicologosController.listarPsicologosId)
routes.post('/psicologos', PsicologosCreateValidation,psicologosController.cadastrarPsicologos)
routes.put('/psicologos/:id', psicologosController.atualizarPsicologos)
routes.delete('/psicologos/:id', psicologosController.deletarPsicologos)

routes.get('/atendimentos', atendimentoController.listarAtendimentos)
routes.get('/atendimentos/:id', atendimentoController.listarUmAtendimento)
routes.post('/atendimentos', auth, atendimentoController.cadastrarAtendimento)

module.exports = routes 