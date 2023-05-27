const { sequelize, DataTypes, Sequelize } = require("../db/connect");
const { ComparisonLocation } = require("./ComparisonLocation");

const Comparison = sequelize.define(
    "comparisons",
    {
        comparison_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        comparison_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "users",
                key: "user_id",
            },
            onDelete: "CASCADE",
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        compared_locations_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

// Associations
Comparison.hasMany(ComparisonLocation, {
    foreignKey: "comparison_id",
    onDelete: "CASCADE",
});

const makeComparison = (comparisonInfos) => {
    const { comparison_name, note, user_id, compared_locations_count } =
        comparisonInfos;
    const comparison = {
        comparison_name,
        note,
        user_id,
        compared_locations_count,
    };
    return comparison;
};

module.exports = { Comparison, makeComparison };
