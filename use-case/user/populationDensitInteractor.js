const populationDensitInteractor = async (sequelize) => {
    try {
        const polygons = await sequelize.query(
            `
            SELECT gid, objectid,
                municipali, gouvernora,
                sum_nbsect, sum_popula,
                shape__are, shape__len,
                pop_densit,
                geom
            FROM tunisia_population
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

module.exports = populationDensitInteractor;
