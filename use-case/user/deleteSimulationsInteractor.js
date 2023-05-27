const deleteSimulationsInteractor = async (simulations, Simulation) => {
    try {
        if (!simulations) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }

        // deleting all predictions who have
        const deleteSim = await Simulation.destroy({
            where: {
                simulation_id: simulations,
            },
        });

        // this will return the number of deleted users
        if (deleteSim === 0) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }
        return {
            status: 200,
            data: {
                msg: "Predictions deleted successfully !",
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};

module.exports = deleteSimulationsInteractor;
