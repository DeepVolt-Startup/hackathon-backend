"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            "comparison_locations",
            {
                comparison_location_id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                comparison_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "comparisons",
                        key: "comparison_id",
                    },
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
                location_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "locations",
                        key: "location_id",
                    },
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
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
            },
            {
                timestamps: true,
                createdAt: "created_at",
                updatedAt: "updated_at",
            },
        );
    },

    async down(queryInterface, Sequelize) {
        // await queryInterface.dropTable("comparison_locations");
    },
};
