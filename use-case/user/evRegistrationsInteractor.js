const evRegistrationsInteractor = async (
    inputPolygon,
    sequelize,
    limit,
) => {
    try {
        const polygons = await sequelize.query(
            `
            SELECT ev_registr as ev_count,geom
            FROM communes
            WHERE EXISTS (
                SELECT 1
                FROM ST_Dump(geom) AS poly
                WHERE (
                    ST_Intersects(poly.geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                        inputPolygon.data.geometry,
                        )}'), 4326))
                        OR ST_Within(poly.geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                            inputPolygon.data.geometry,
                            )}'), 4326)))
                            AND ST_IsValid(ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
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

        const min = 0.000000000000000;      // min of ev_count
        const max = 8715.871999999999389 ;      // max of ev_count
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

module.exports = evRegistrationsInteractor;
