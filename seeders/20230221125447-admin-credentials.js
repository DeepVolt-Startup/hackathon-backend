"use strict";
const uuid = require("uuid");
const bcrypt = require("bcrypt");
require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("admins", [
            {
                admin_id: uuid.v4(),
                fullname: "karem chatti",
                email: process.env.ADMIN_EMAIL,
                password: bcrypt.hashSync(process.env.ADMIN_PWD, 8),
                role: "super-admin",
                created_at: Sequelize.fn("NOW"),
                updated_at: Sequelize.fn("NOW"),
            },
            {
                admin_id: uuid.v4(),
                fullname: "tarek keskes",
                email: process.env.SUPER_ADMIN_EMAIL,
                password: bcrypt.hashSync(process.env.SUPER_ADMIN_PWD, 8),
                role: "super-admin",
                created_at: Sequelize.fn("NOW"),
                updated_at: Sequelize.fn("NOW"),
            },
            {
                admin_id: uuid.v4(),
                fullname: "jhon doe",
                email: process.env.SUPER_ADMIN_EMAIL,
                password: bcrypt.hashSync(process.env.ADMIN_PWD, 8),
                role: "admin",
                created_at: Sequelize.fn("NOW"),
                updated_at: Sequelize.fn("NOW"),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {},
};
