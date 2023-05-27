const { makeLocation, Location } = require("../../../models/Location");
const saveLocationInteractor = require("../../../use-case/user/saveLocationInteractor");

const saveLocation = async (req, res) => {
    const locationInfos = req.body;
    // const { id } = req.token;
    // console.log("toekne:", id);
    const result = await saveLocationInteractor(Location, makeLocation, locationInfos);

    res.status(result.status).json(result.data);
};

module.exports = saveLocation;
