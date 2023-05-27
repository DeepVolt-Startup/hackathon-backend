const getSimulationsInteractor = async (Simulation, id) => {
    try {
        // check if user exist or not
        /* const user = await User.findOne({
            where: {
                email : email,
                confirmed: true,
            },
        }); */

        const allSimulations = await Simulation.findAll({
            attributes: [
                "name",
                "address",
                "city",
                "type",
                "dc_less_than_50",
                "dc_between_50_150",
                "dc_between_150_350",
                "dc_greater_than_350",
                "ac_less_than_7",
                "ac_between_7_22",
                "ac_greater_than_22",
                "user_id",
                "simulation_id",
                "created_at",
                "updated_at",
                "prediction"
            ],
            where: {
                user_id: id,
            },
        });
        return {
            status: 200,
            data: allSimulations,
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

module.exports = getSimulationsInteractor;
