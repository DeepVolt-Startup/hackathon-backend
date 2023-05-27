const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Iris = sequelize.define(
    "iris",
    {
        code_com: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        iris: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code_iris: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: true,
        },
        nom_iris: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typ_iris: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        area: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        population: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        pop_densit: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        tot_revenu: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        avg_revenu: {
            type: DataTypes.REAL,
            allowNull: false,
            index: true,
        },
        ev_density: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        cp_count: {
            type: DataTypes.REAL,
            allowNull: false,
            index: true,
        },
        cp_density: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        poi_count: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        poi_score: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        ev_score: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        pop_score: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        compete_sc: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        rev_score: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        score: {
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

module.exports = { Iris };
