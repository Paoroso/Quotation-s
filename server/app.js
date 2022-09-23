const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const UsuarioRoutes = require("./src/routes/v1/UsuarioRouter");
const CotacaoRoutes = require("./src/routes/v1/CotacaoRouter");
const AutenticacaoRoutes = require("./src/routes/v1/AutenticacaoRouter");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', UsuarioRoutes)
app.use('/api/v1/', CotacaoRoutes)
app.use('/api/v1/', AutenticacaoRoutes)


module.exports = app;