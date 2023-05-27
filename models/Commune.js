const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Commune = sequelize.define(
    "communes",
    {
        code_com: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        nom_com: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        ev_registr: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            index: true,
        },
        ev_rate: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        geom: {
            type: DataTypes.GEOMETRY("POLYGON", 4326),
            allowNull: false,
            index: true,
        },
    },
    {
        timestamps: false,
    },
);

module.exports = { Commune };
