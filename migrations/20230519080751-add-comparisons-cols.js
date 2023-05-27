"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            "comparisons",
            "compared_locations_count",
            {
                allowNull: true,
                defaultValue: 0,
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );
    },

    async down(queryInterface, Sequelize) {},
};
