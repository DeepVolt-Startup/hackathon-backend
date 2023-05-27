const saveLocationInteractor = async (
    Location,
    makeLocation,
    locationInfos,
) => {
    try {
        const location = makeLocation(locationInfos);
        const createdLocation = await Location.create(location);
        
        return {
            status: 200,
            data: {
                createdLocation,
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

module.exports = saveLocationInteractor;
