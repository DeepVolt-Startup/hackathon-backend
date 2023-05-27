const potentialScoreInteractor = async (
    inputPolygon,
    sequelize,
    Iris,
    limit,
) => {
    try {
        const polygons = await sequelize.query(
            `
            SELECT score,geom
            FROM Iris
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

module.exports = potentialScoreInteractor;
