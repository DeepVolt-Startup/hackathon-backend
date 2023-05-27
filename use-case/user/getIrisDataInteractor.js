const getIrisDataInteractor = async (
    lon,
    lat,
    sequelize,
    nb_POIs,
    // nbChargePts,
) => {
    try {
        if (lon == null || lat == null) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }

        // calculating nbChargePts
        let nbChargePoints = await sequelize.query(
            `
            SELECT count(*)
            FROM tunisia_population
            WHERE
            ST_DWithin(
                ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326),
                geom,
                5000,
                true
            )`,
        );
        nbChargePoints = Number(nbChargePoints[0][0].count);

        let POI_score = nb_POIs > 20 ? 10 : (nb_POIs / 20) * 10;
        /* let competition_score =
            nbChargePts == 0
                ? 10
                : nbChargePts > 50
                ? 0
                : (1 / nbChargePts) * 10; */
        let competition_score =
            nbChargePoints == 0
                ? 10
                : nbChargePoints > 50
                ? 0
                : 10 / Math.sqrt(nbChargePoints);
        // const max_pop_den = await population.max("pop_densit");
        const max_pop_den = 16371.638657844503541;

        let pop_den = await sequelize.query(
            `
            SELECT pop_densit, geom
FROM tunisia_population
WHERE ST_Contains(geom, ST_SetSRID(ST_Point(${lon}, ${lat}), 4326));
            `,
        );
        pop_den = parseFloat(pop_den[0][0].pop_densit);
        const pop_den_score = (pop_den / max_pop_den) * 10;
        //siteAttarctScore
        const siteAttarctScore =
            (POI_score * 4 +
                // ev_score * 5 +
                competition_score * 2 +
                pop_den_score * 4) / 10;
        return {
            status: 200,
            data: siteAttarctScore,
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

module.exports = getIrisDataInteractor;
