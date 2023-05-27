"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            "locations",
            {
                location_id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                saved_name: {
                    type: Sequelize.STRING,
                },
                type_location: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                long: {
                    type: Sequelize.REAL,
                    allowNull: false,
                },
                lat: {
                    type: Sequelize.REAL,
                    allowNull: false,
                },
                note: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                user_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    references: {
                        model: "users",
                        key: "user_id",
                    },
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
                site_attractiveness_score: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                location_source: {
                    type: Sequelize.STRING,
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
        // await queryInterface.dropTable("locations");
    },
};
