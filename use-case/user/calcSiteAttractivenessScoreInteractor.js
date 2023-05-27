const calcSiteAttractivenessScoreInteractor = async (
    lon,
    lat,
    sequelize,
    Iris,
    Grid,
    nb_POIs,
    nbChargePts,
) => {
    try {
        if (
            lon == null ||
            lat == null ||
            nb_POIs == null ||
            nbChargePts == null
        ) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }

        let ev_score = await Iris.findAll({
            attributes: ["ev_score"],
            where: sequelize.literal(
                `ST_Contains(geom, ST_SetSRID(ST_Point(${lon}, ${lat}), 4326))`,
            ),
        });
        ev_score = parseFloat(ev_score[0].ev_score);
        let POI_score = nb_POIs > 20 ? 10 : (nb_POIs / 20) * 10;

        let competition_score =
            nbChargePts == 0
                ? 10
                : nbChargePts > 50
                ? 0
                : 10 / Math.sqrt(nbChargePts);

        const max_pop_den = await Grid.max("pop_densit");

        const pop_den = await Grid.findAll({
            attributes: ["pop_densit"],
            where: sequelize.literal(
                `ST_Contains(geom, ST_SetSRID(ST_Point(${lon}, ${lat}), 4326))`,
            ),
        });

        if (pop_den.length === 0) {
            return {
                status: 403,
                data: pop_den,
            };
        }

        const pop_den_score = (pop_den[0].pop_densit / max_pop_den) * 10;

        const max_pop_revenu = await Grid.max("avg_revenu");

        const pop_revenu = await Grid.findAll({
            attributes: ["avg_revenu"],
            where: sequelize.literal(
                `ST_Contains(geom, ST_SetSRID(ST_Point(${lon}, ${lat}), 4326))`,
            ),
        });

        if (pop_revenu.length === 0) {
            return {
                status: 409,
                data: pop_revenu,
            };
        }

        const pop_revenu_score =
            (pop_revenu[0].avg_revenu / max_pop_revenu) * 10;
        // site attractiveness score
        const siteAttractScore =
            (POI_score * 1 +
                ev_score * 5 +
                competition_score * 2 +
                pop_den_score * 4 +
                pop_revenu_score * 3) /
            15;
            console.log(siteAttractScore);
        return {
            status: 200,
            data: {
                site_attractiveness_score: parseFloat(siteAttractScore),
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

module.exports = calcSiteAttractivenessScoreInteractor;
