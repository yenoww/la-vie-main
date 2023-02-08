const { Atendimentos, Psicologos, Paciente} = require('../models')

const base64 = require("base-64")
const utf8 = require("utf8")

const atendimentosController = {
  listarAtendimentos: async (req, res) => {
    try {
      const listaAtendimentos = await Atendimentos.findAll({
        include: Psicologos, Paciente,
      })

      return res.status(200).json(listaAtendimentos)
    } catch (error) {
      console.log(error)
      return res.status(404).json('Ocorreu um erro, contate o suporte')
    }
  },

  listarUmAtendimento: async (req, res) => {
    try {
      const { id } = req.params
      const listarAtendimento = await Atendimentos.findByPk(id)

      res.status(200).json(listarAtendimento)
    } catch (error) {
      console.log(error)

      return res.status(404).json('id não encontrado')
    }
  },

  cadastrarAtendimento: async (req, res) => {
    console.log(req.auth)

    const { data_atendimento, observacao, id_paciente } = req.body
    try {
      const encoded = req.headers.authorization.slice(7).split(".")
            const bytes = base64.decode(encoded[1]);
            const text = utf8.decode(bytes);
            const id_psicologo = JSON.parse(text).id;

      const novoAtendimento = await Atendimentos.create({
        id_paciente,
        id_psicologo,
        data_atendimento,
        observacao
      })
      res.status(201).json(novoAtendimento)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = atendimentosController