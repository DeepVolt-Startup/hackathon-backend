const evStatsInteractor = async (
    inputPolygon,
    sequelize,
    selectQueryType,
    radius,
    limit,
) => {
    try {
        const charging_stations = await sequelize.query(
            `
            SELECT id_station, json_agg(json_build_object(
                'geom', geom,
                'address', adresse_st,
                'prise_type', prise_type,
                'prise_type_1', prise_ty_1,
                'prise_type_2', prise_ty_2,
                'prise_type_3', prise_ty_3,
                'prise_type_4', prise_ty_4
            )) AS charging_points
            FROM charging_stations
            WHERE (ST_Within(geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                inputPolygon.data.geometry,
            )}'), 4326))
                OR ST_Contains(geom, ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                    inputPolygon.data.geometry,
                )}'), 4326)))
                AND ST_IsValid(ST_SetSRID(ST_GeomFromGeoJSON('${JSON.stringify(
                    inputPolygon.data.geometry,
                )}'), 4326))
            GROUP BY id_station;
            `,
            {
                type: selectQueryType,
            },
        );
        return {
            status: 200,
            data: {
                charging_stations,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error occurred, please try again!",
            },
        };
    }
};

module.exports = evStatsInteractor;
