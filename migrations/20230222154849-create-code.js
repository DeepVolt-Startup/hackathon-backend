"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("codes", {
                code_id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV1,
                    primaryKey: true,
                },
                isUsed: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                code_text: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    unique: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                },
                expired_at: {
                    type: Sequelize.DATE,
                    //defaultValue: Sequelize.NOW.getTime() + (5*60000), // current time + 5 minutes
                    defaultValue: new Date(new Date().getTime() + 5 * 60000), // current time + 5 minutes
                    allowNull: false,
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
        // await queryInterface.dropTable("codes");
    }, 
};
