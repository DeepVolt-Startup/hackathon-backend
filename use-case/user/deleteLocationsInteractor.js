const deleteLocationsInteractor = async (locations, Location) => {
    console.log(locations);
    try {
        if (!locations) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }

        // deleting all locations who have
        const deleteLoc = await Location.destroy({
            where: {
                location_id: locations,
            },
        });

        // this will return the number of deleted users
        if (deleteLoc === 0) {
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
                msg: "Locations deleted successfully !",
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

module.exports = deleteLocationsInteractor;
