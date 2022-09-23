const UsuarioService = require("../services/UsuarioService");
const AutenticacaoService = require("../services/AutenticacaoService");

module.exports = {
  async doLogin(req, res) {
    try {
      if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')) {
        const userLogin = await UsuarioService.getByEmail(req.body.email);

        if (!userLogin) {
          throw new Error();
        }

        const authenticated = await AutenticacaoService.comparePwd(req.body.password, userLogin.password);

        if (!authenticated) {
          throw new Error();
        }

        const token = AutenticacaoService.signJwt(userLogin._id);
        res.set('Authorization', `Bearer ${token}`);
        res.status(200).json({
          user: userLogin,
          token: token
        });
      } else {
        res.status(400).send("Objeto de requisição deve conter um atributo email e password");
      }
    } catch {
      res.status(400).send("Senha e/ou usuário incorretos");
    }
  },
}