const getEvShareInteractor = async (lon, lat, sequelize, Commune) => {
    console.log(lon,lat)
    try {
        const req = await Commune.findAll({
            attributes: ["ev_registr"],
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

module.exports = getEvShareInteractor;
