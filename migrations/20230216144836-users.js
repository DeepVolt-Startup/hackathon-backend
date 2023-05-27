"use strict";

const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            "users",
            {
                user_id: {
                    // user_id
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
                country: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                company: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                position: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                has_access: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: true,
                },
                phone_number: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                confirmed: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                sent_invitations_count: {
                    type: DataTypes.INTEGER,
                    defaultValue: 0,
                    index: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                },
                company_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "companies",
                        key: "company_id",
                    },
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
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
        // await queryInterface.dropTable("users");
    },
};
