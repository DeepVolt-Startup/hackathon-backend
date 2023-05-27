const populationAgeDistribInteractor = async (lon, lat, sequelize) => {
    try {
        const polygons = await sequelize.query(
            `SELECT ind_0_3,ind_4_5,ind_6_10,ind_11_17,ind_18_24,ind_18_24,ind_25_39,ind_40_54,ind_55_64,ind_65_79,ind_80p
                FROM grids
                WHERE EXISTS (
                SELECT 1
                    FROM ST_Dump(geom) AS poly
                    WHERE ST_Intersects(poly.geom, ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326))
                    OR ST_Within(poly.geom, ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326))
            )
        `,
            {
                type: sequelize.QueryTypes.SELECT,
            },
        );

        for (const key in polygons[0]) {
            polygons[0][key] = Math.floor(polygons[0][key]);
        }

        console.log(polygons);
        return {
            status: 200,
            data: polygons,
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

module.exports = populationAgeDistribInteractor;
