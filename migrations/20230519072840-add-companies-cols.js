"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("companies", "company_status", {
            type: Sequelize.STRING,
            defaultValue: "Active",
        });

        await queryInterface.addColumn("companies", "company_predict_credit", {
            type: Sequelize.REAL,
            allowNull: true,
            index: true,
        });
    },

    async down(queryInterface, Sequelize) {},
};
