const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/database");

class Usuario extends Model{};

Usuario.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    freezeTableName: false,
    timestamps: true
});

module.exports = Usuario;