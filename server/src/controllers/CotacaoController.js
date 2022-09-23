const Cotacao = require("../models/CotacaoModel");
const { cotarSeguro } = require("../services/CotacaoService");

module.exports = {
  async process(request, response) {
    try {
      if (
        request.body.hasOwnProperty("productName") &&
        request.body.hasOwnProperty("productPrice") &&
        request.body.hasOwnProperty("paymentType")
      ) {
        const cotacao = cotarSeguro(
          request.body.productName,
          request.body.productPrice,
          request.body.paymentType
        );
        response.status(200).json(cotacao);
      } else {
        response
          .status(400)
          .send(
            "Objeto de requisição deve conter atributo productName, paymentType e productPrice"
          );
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const cotacao = await Cotacao.create({
        usuario_id: request.params.id_usuario,
        ...request.body,
      });
      response.status(201).json(cotacao);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async delete(request, response) {
    try {
      await Cotacao.destroy({
        where: {
          id: request.params.id_cotacao,
        },
      });
      response.status(204).send("Cotação deletada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByUser(request, response) {
    try {
      const id = request.params.id_usuario;
      const cotacoes = await Cotacao.findAll({ where: { usuario_id: id } });
      response.status(200).json(cotacoes);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
