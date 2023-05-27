const { Location } = require("../../../models/Location");
const deleteLocationsInteractor = require("../../../use-case/user/deleteLocationsInteractor");

const deleteLocations = async (req, res) => {
    // console.log("body : ", req.body);

    const { locations } = req.body;

    const result = await deleteLocationsInteractor(locations, Location);

    res.status(result.status).json(result.data);

};

module.exports = deleteLocations;
