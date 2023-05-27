const chargePointsInteractor = async (
    inputPolygon,
    sequelize,
    limit,
) => {
    try {
        const polygons = await sequelize.query(
            `
            SELECT cp_count,geom
            FROM iris
            WHERE EXISTS (
                SELECT 1
                FROM ST_Dump(geom) AS poly
                WHERE ST_Intersects(poly.geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                    inputPolygon.data.geometry,
                )}'), 4326))
                    OR ST_Within(poly.geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                        inputPolygon.data.geometry,
                    )}'), 4326))
            )
            ORDER BY RANDOM()
            limit ${limit};
        `,
            {
                type: sequelize.QueryTypes.SELECT,
            },
        );

        const min = 1.000000000000000;      // min of avg_revenu
        const max = 511.000000000000000;      // max of avg_revenu
        return {
            status: 200,
            data: {
                polygons,
                min : min,
                max : max,
            },
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

module.exports = chargePointsInteractor;
