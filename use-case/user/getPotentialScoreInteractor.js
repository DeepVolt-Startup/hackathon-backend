const getPotentialScoreIteractor = async (sequelize, Iris) => {
    try {
        const req = await Iris.findAll({
            attributes: ["score", "geom"],
            where: sequelize.literal(
                `ST_Contains(geom, ST_SetSRID(ST_Point(${lon}, ${lat}), 4326))`,
            ),
        });

        if (req.length === 0) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }

        return {
            status: 200,
            data: req,
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

module.exports = getPotentialScoreIteractor;
