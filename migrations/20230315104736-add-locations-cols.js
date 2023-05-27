"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("locations", "population_densit", {
            type: Sequelize.REAL,
            allowNull: true,
            defaultValue: 0,
        });

        await queryInterface.addColumn("locations", "median_revenue", {
            type: Sequelize.REAL,
            allowNull: true,
            defaultValue: 0,
        });

        await queryInterface.addColumn("locations", "nearby_POIs_count", {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
        });

        await queryInterface.addColumn("locations", "competition_count", {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
        });

        await queryInterface.addColumn("locations", "ev_registrations", {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
        });

        await queryInterface.addColumn("locations", "location_address", {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "",
        });

        await queryInterface.addColumn("locations", "ev_connectors", {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "",
        });

        // return Promise.resolve();
    },

    async down(queryInterface, Sequelize) {},
};
