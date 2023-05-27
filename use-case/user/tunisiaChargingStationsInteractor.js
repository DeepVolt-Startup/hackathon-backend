const tunisiaChargingStationsInteractor = async (sequelize) => {
    try {
        const points = await sequelize.query(
            `SELECT *
                FROM tunisia_charging_stations`,
            {
                type: sequelize.QueryTypes.SELECT,
            },
        );
        return {
            status: 200,
            data: points,
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

module.exports = tunisiaChargingStationsInteractor;
