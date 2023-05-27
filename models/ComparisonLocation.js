const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const ComparisonLocation = sequelize.define(
    "comparison_locations",
    {
        comparison_location_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        comparison_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "comparisons",
                key: "comparison_id",
            },
            unique: false,
            onDelete: "CASCADE",
        },
        location_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "locations",
                key: "location_id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            unique: false,
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

ComparisonLocation.associate = (models) => {
    ComparisonLocation.belongsTo(models.Location, {
        foreignKey: "location_id",
        onDelete:"cascade",
    });
};

module.exports = { ComparisonLocation };
