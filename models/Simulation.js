const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Simulation = sequelize.define(
    "simulations",
    {
        simulation_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dc_less_than_50: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dc_between_50_150: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dc_between_150_350: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dc_greater_than_350: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ac_less_than_7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ac_between_7_22: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ac_greater_than_22: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "users",
                key: "user_id",
            },
        },
        location_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "locations",
                key: "location_id",
            },
        },
        prediction: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

const makeSimulation = (simulationInfos) => {
    const simulation = {
        name: simulationInfos.name,
        address: simulationInfos.address,
        city: simulationInfos.city,
        type: simulationInfos.type,
        dc_less_than_50: simulationInfos.dc_less_than_50,
        dc_between_50_150: simulationInfos.dc_between_50_150,
        dc_between_150_350: simulationInfos.dc_between_150_350,
        dc_greater_than_350: simulationInfos.dc_greater_than_350,
        ac_less_than_7: simulationInfos.ac_less_than_7,
        ac_between_7_22: simulationInfos.ac_between_7_22,
        ac_greater_than_22: simulationInfos.ac_greater_than_22,
        user_id: simulationInfos.user_id,
    };

    return simulation;
};

module.exports = { Simulation, makeSimulation };
