const Usuario = require("../models/UsuarioModel");
const AutenticacaoService = require("../services/AutenticacaoService");

module.exports = {
  async create(request, response) {
    try {
      const user = { ...request.body }
      user.password = await AutenticacaoService.encryptPwd(request.body.password)
      const usuario = await Usuario.create(user);
      const dataUser = {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
        telefone: usuario.telefone
      }
      response.status(201).json(dataUser);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getUser(request, response) {
    try {
      const id = request.params.id_usuario;
      const usuario = await Usuario.findOne(
        {
          attributes: {
            exclude: ['password']
          },
          where: {
            id
          }
        }
      );
      if (!usuario) {
        return response.status(404).json("Usuário não encontrado");
      }
      response.status(200).json(usuario);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request, response) {
    try {
      const id = request.params.id_usuario;
      const usuario = await Usuario.destroy({ where: { id } });
      if (!usuario) {
        return response.status(404).json("Usuário não encontrado");
      }
      response.status(202).json("Usuário deletado");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};