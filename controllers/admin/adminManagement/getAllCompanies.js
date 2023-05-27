const { User } = require("../../../models/User");
const getCompaniesInteractor = require("../../../use-case/admin/getCompaniesInteractor");
const { QueryTypes } = require('sequelize');
const { sequelize } = require("../../../db/connect");

// selecting all users :
const getAllCompanies = async (req, res) => {
    const result = await getCompaniesInteractor(User, sequelize, QueryTypes);

    res.status(result.status).json(result);
};

module.exports = getAllCompanies;
