const saveSimulationInteractor = async (
    Simulation,
    makeSimulation,
    simulationInfos,
    Location,
    makeLocation,
    locationInfos,
    saveLocationInteractor,
    User,
    postRequest,
) => {
    try {
        const user_id = locationInfos.user_id;

        const user = await User.findOne({
            where: {
                user_id: user_id,
                confirmed: true,
            },
        });

        if (!user) {
            return {
                status: 401,
                data: {
                    msg: "Invalid Inputs",
                },
            };
        }

        const simulation = makeSimulation(simulationInfos);
        // checking if the simulation already used :

        const existSimulation = await Simulation.findOne({
            where: {
                name: simulationInfos.name,
                user_id: simulationInfos.user_id,
            },
        });

        if (existSimulation !== null) {
            return {
                status: 409,
                data: {
                    msg: "Prediction name already used, please provide valid name !",
                },
            };
        }

        // saving location bfore simulating it
        const createdLocation = await saveLocationInteractor(
            Location,
            makeLocation,
            locationInfos,
        );

        // extracting location_id from createdLocation
        const location_id =
            createdLocation.data.createdLocation.dataValues.location_id;

        // returned createdLocation :
        const finalCreatedLocation = createdLocation.data;

        const reqBody = {
            lon: Number(locationInfos.long),
            lat: Number(locationInfos.lat),
            nb_types_charges: {
                dc_less_than_50: Number(simulationInfos.dc_less_than_50),
                dc_between_50_150: Number(simulationInfos.dc_between_50_150),
                dc_between_150_350: Number(simulationInfos.dc_between_150_350),
                dc_greater_than_350: Number(
                    simulationInfos.dc_greater_than_350,
                ),
                ac_less_than_7: Number(simulationInfos.ac_less_than_7),
                ac_between_7_22: Number(simulationInfos.ac_between_7_22),
                ac_greater_than_22: Number(simulationInfos.ac_greater_than_22),
            },
        };
       /*  const { data } = await postRequest(
            "https://s0ss9p75gf.execute-api.eu-west-3.amazonaws.com/placeholder-api/",
            reqBody,
        );
        const prediction = Number(data.prediction.split(".")[0])*12; */

        // saving simulation to the db
        const createdSimulation = await Simulation.create({
            ...simulation,
            location_id,
            prediction: 150,
        });

        return {
            status: 200,
            data: {
                finalCreatedLocation,
                createdSimulation,
                // prediction: prediction,
                prediction: 150,
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

module.exports = saveSimulationInteractor;
