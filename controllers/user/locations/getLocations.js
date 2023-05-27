const { Location } = require("../../../models/Location");
const getLocationsInteractor = require("../../../use-case/user/getLocationsInteractor");

const getLocations = async (req, res) => {
    const { id } = req.params;

    const result = await getLocationsInteractor(Location, id);

    res.status(result.status).json(result.data);
};

module.exports = getLocations;
