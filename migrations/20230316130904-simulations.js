"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable("simulations", {
                simulation_id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
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
                user_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "users",
                        key: "user_id",
                    },
                },
                dc_less_than_50: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                dc_between_50_150: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                dc_between_150_350: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                dc_greater_than_350: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                ac_less_than_7: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                ac_between_7_22: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                ac_greater_than_22: {
                    type : DataTypes.STRING,
                    allowNull : false,
                },
                prediction: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                location_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "locations",
                        key: "location_id",
                    },
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE",
                },
            },
            {
                timestamps: true,
                createdAt: "created_at",
                updatedAt: "updated_at",
            },
        );
    },

    async down(queryInterface, Sequelize) {
        // await queryInterface.dropTable("simulations");
    },
};
