"use strict";

const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            "admins",
            {
                admin_id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                fullname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                role: {
                    type: DataTypes.STRING,
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
    },

    async down(queryInterface, Sequelize) {
        // await queryInterface.dropTable("admins");
    },
};
