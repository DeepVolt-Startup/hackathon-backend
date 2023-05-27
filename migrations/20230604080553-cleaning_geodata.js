"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn("grids", "gid");
        await queryInterface.removeColumn("iris", "gid");

        await queryInterface.addConstraint("iris", {
            type: "primary key",
            fields: ["code_iris"],
            name: "iris_code_iris_pk",
        });

        await queryInterface.addConstraint("grids", {
            type: "primary key",
            fields: ["id"],
            name: "grids_id_pkey",
        });

        await queryInterface.renameColumn("grids", "id", "grid_id");
        await queryInterface.renameColumn(
            "charging_stations",
            "gid",
            "charging_station_id",
        );
        await queryInterface.renameColumn("communes", "gid", "commune_id");

        await queryInterface.removeColumn("charging_stations", "telephone_");
        await queryInterface.removeColumn("charging_stations", "id_stati_1");
        await queryInterface.removeColumn("charging_stations", "id_pdc_loc");
        await queryInterface.removeColumn("charging_stations", "tarificati");
        await queryInterface.removeColumn("charging_stations", "cable_t2_a");
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.addColumn("iris", "gid", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn("grids", "gid", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.removeConstraint("grids", "grids_id_pkey");
        await queryInterface.removeConstraint("iris", "iris_code_iris_pk");

        await queryInterface.renameColumn("grids", "grid_id", "id");
        await queryInterface.renameColumn(
            "charging_stations",
            "charging_station_id",
            "gid",
        );
        await queryInterface.renameColumn("communes", "commune_id", "gid");
        await queryInterface.addColumn("charging_stations", "telephone_", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("charging_stations", "id_stati_1", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("charging_stations", "id_pdc_loc", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("charging_stations", "tarificati", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("charging_stations", "cable_t2_a", {
            type: Sequelize.STRING,
        });
    },
};
