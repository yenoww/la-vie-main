const Paciente = require('../models/Paciente')

const pacientesController = {
  //Listar todos Pacientes
  async listarPacientes(req, res) {
    try {
      const listaPaciente = await Paciente.findAll()
      res.status(200).json(listaPaciente)
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  //Listar Pacientes por ID
  async listarPacientesId(req, res) {
    try {
      const { id } = req.params
      const listaPaciente = await Paciente.findOne({
        where: {
          paciente_id: id
        }
      })

      if (!listaPaciente) {
        res.status(404).json('Id não encontrado. Por favor tente novamente.')
      } else {
        res.status(200).json(listaPaciente)
      }
    } catch (error) {
      res.status(404).json({ error })
    }
  },

  //Cadastrar Pacientes
  async cadastrarPacientes(req, res) {
    try {
      const { nome, email, idade } = req.body
      const casdastraPaciente = await Paciente.create({
        nome,
        email,
        idade
      })

      if (!casdastraPaciente) {
        res
          .status(400)
          .json('Houve um erro na requisição. Por favor, tente novamente.')
      } else {
        res.status(201).json(`Paciente ${nome} cadastrado com sucesso!`)
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  //Atualizar Pacientes
  async atualizarPacientes(req, res) {
    try {
      const { id } = req.params
      const { nome, email, idade } = req.body

      const AtualizaPaciente = await Paciente.findOne({
        where: {
          id: id
        }
      })

      if (!AtualizaPaciente) {
        res
          .status(400)
          .json('Houve um erro na requisição. Por favor, tente novamente.')
      } else {
        await Paciente.update({ nome, email, idade }, { where: { id } })
      }

      res
        .status(200)
        .json(`Informações do paciente ${nome} atualizadas com sucesso!`)
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  //Deletar Paciente
  async deletarPacientes(req, res) {
    try {
      const { id } = req.params
      const deletar = await Paciente.destroy({
        where: {
          paciente_id: id
        }
      })

      if (!deletar) {
        res.status(404).json('Id não encontrado.')
      } else {
        res.sendStatus(204)
      }
    } catch (error) {
      console.log(error)
      res.status(404).json({ error })
    }
  }
}

module.exports = pacientesController