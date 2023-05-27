const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Location = sequelize.define(
    "locations",
    {
        location_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        saved_name: {
            type: DataTypes.STRING,
        },
        type_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        long: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        lat: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        note: {
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
        },
        location_source: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        site_attractiveness_score: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        population_densit: {
            type: DataTypes.REAL,
            allowNull: true,
            defaultValue: 0,
        },
        median_revenue: {
            type: DataTypes.REAL,
            allowNull: true,
            defaultValue: 0,
        },
        nearby_POIs_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        competition_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        ev_registrations: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        location_address: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
        },
        ev_connectors: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        // simulation location : saved or simulated
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

Location.associate = (models) => {
    // Associations
    Location.hasMany(models.Simulation, {
        foreignKey: "location_id",
        onDelete: "CASCADE",
    });
    Location.hasMany(models.ComparisonLocation, {
        foreignKey: "location_id",
        onDelete: "cascade",
    });
};

/* Location.associate = (models) => {
    Location.hasMany(models.ComparisonLocation, {
        foreignKey: "location_id",
        onDelete: "cascade",
    });
}; */

const makeLocation = (locationinfos) => {
    const location = {
        name: locationinfos.name,
        type_location: locationinfos.type_location,
        saved_name: locationinfos.saved_name,
        long: locationinfos.long,
        lat: locationinfos.lat,
        note: locationinfos.note,
        location_source: locationinfos.location_source,
        user_id: locationinfos.user_id,
        site_attractiveness_score: locationinfos.site_attractiveness_score,
        population_densit: locationinfos.population_densit,
        median_revenue: locationinfos.median_revenue,
        nearby_POIs_count: locationinfos.nearby_POIs_count,
        competition_count: locationinfos.competition_count,
        ev_registration: locationinfos.ev_registration,
        location_address: locationinfos.location_address,
        ev_connectors: locationinfos.ev_connectors,
    };

    return location;
};

module.exports = { Location, makeLocation };
