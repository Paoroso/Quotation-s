const Usuario= require("../models/UsuarioModel");

module.exports = {
  async getByEmail(email) {
    const usuario = await Usuario.findOne({ where: {'email': email } });
    return usuario;
  }
}