const { User } = require("./User");
const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Company = sequelize.define(
    "companies",
    {
        company_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        has_access: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        company_status: {
            type: DataTypes.STRING,
            defaultValue: "Active",
        },
        company_predict_credit: {
            type: DataTypes.REAL,
            defaultValue: 0,
            index: true,
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

// relationship between companies and users
Company.hasMany(User, {
    foreignKey: "company_id",
    onDelete: 'CASCADE',
});

const makeCompany = (domain) => {
    const company = {
        domain: domain,
    };

    return company;
};

module.exports = { Company, makeCompany };
