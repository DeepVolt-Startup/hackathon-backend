"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "companies",
            {
                company_id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                domain: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                has_access: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: true,
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
        // await queryInterface.dropTable("companies");
    },
};
