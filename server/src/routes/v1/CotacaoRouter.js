const {Router} = require("express");
const CotacaoController = require("../../controllers/CotacaoController");
const {verifyJWT} = require("../../middleware/AutenticacaoMiddleware");
const routes = Router();

routes.post("/cotacao/processamento", verifyJWT, CotacaoController.process);
routes.post("/cotacao/:id_usuario", verifyJWT, CotacaoController.create);
routes.delete("/cotacao/:id_cotacao", verifyJWT, CotacaoController.delete);
routes.get("/cotacao/:id_usuario", verifyJWT, CotacaoController.getByUser);

module.exports = routes;