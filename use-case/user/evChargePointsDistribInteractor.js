const evChargePointsDistribInteractor = async (lon, lat, sequelize, radius) => {
    try {
        const chargePoints = await sequelize.query(
            `
            SELECT puissance_,nom_statio, ST_AsGeoJSON(geom) AS location
            FROM charging_stations
            WHERE
            ST_DWithin(
                ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326),
                geom,
                ${radius},
                true
            )`,
        );
        console.log(chargePoints);
        return {
            status: 200,
            data: chargePoints[0],
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error occured, please try again !",
            },
        };
    }
};

module.exports = evChargePointsDistribInteractor;
