const { Psicologo } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const bcrypt = require("bcryptjs");
const AuthController = {
    async login(req, res){
        const { email, senha } = req.body;
        const psicologo = await Psicologo.findOne({
            where: {
                email,
            },
        });
        if(!psicologo || !bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(400).json("“E-mail ou senha inválido, verifique e tente novamente.");
        }
        const token = jwt.sign({
           id: psicologo.psicologo_id,
           email: psicologo.email,
           nome: psicologo.nome 
        },
        secret.key);
        return res.status(200).json(token);
    },
}
module.exports = AuthController;