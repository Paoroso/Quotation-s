const {Router} = require("express");
const UsuarioController = require("../../controllers/UsuarioController");
const {verifyJWT} = require("../../middleware/AutenticacaoMiddleware");
const routes = Router();

routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:id_usuario", verifyJWT, UsuarioController.getUser);
routes.delete("/usuario/:id_usuario", verifyJWT, UsuarioController.remove);

module.exports = routes;