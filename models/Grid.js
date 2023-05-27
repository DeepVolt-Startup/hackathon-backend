const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Grid = sequelize.define(
    "grids",
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        pop_densit: {
            type: DataTypes.REAL,
            allowNull: false,
            index: true,
        },
        avg_revenu: {
            type: DataTypes.REAL,
            allowNull: false,
            index: true,
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

module.exports = { Grid };
