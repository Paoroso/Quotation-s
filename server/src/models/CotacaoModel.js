const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database/database");

class Cotacao extends Model{};

Cotacao.init({
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    valor_total_seguro: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    paymentType: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portionPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { 
    sequelize,
    modelName: "Cotacao",
    tableName: 'Cotacoes',
    freezeTableName: false,
    timestamps: true
});

module.exports = Cotacao;