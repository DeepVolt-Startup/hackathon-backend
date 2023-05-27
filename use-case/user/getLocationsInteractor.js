const getLocationsInteractor = async (Location, id) => {
    const loc_source = "saved_location";
    try {
        const allLocations = await Location.findAll({
            where: {
                user_id: id,
                location_source:loc_source,
            },
        });
        return {
            status: 200,
            data: allLocations,
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

module.exports = getLocationsInteractor;
