"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addIndex("charging_stations", ["prise_ty_1"], {
            name: "idx_charging_stations_column1",
        });

        await queryInterface.addIndex("charging_stations", ["prise_ty_2"], {
            name: "idx_charging_stations_column2",
        });

        await queryInterface.addIndex("charging_stations", ["prise_ty_3"], {
            name: "idx_charging_stations_column3",
        });

        await queryInterface.addIndex("charging_stations", ["prise_ty_4"], {
            name: "idx_charging_stations_column3",
        });

        await queryInterface.addIndex("charging_stations", ["adresse_st"], {
            name: "idx_charging_stations_column3",
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeIndex(
            "charging_stations",
            "idx_charging_stations_column1",
        );
        await queryInterface.removeIndex(
            "charging_stations",
            "idx_charging_stations_column2",
        );
        await queryInterface.removeIndex(
            "charging_stations",
            "idx_charging_stations_column3",
        );
    },
};
