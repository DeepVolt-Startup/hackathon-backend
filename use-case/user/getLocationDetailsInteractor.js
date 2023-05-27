const getLocationDetailsInteractor = async (
    Simulation,
    simulation_id,
    sequelize,
) => {
    // const loc_source = "saved_location";
    try {
        const location = await sequelize.query(
            `SELECT s.name AS simulation_name, l.name AS location_name, s.*, l.*
            FROM simulations AS s
            JOIN locations AS l ON s.location_id = l.location_id
            WHERE s.simulation_id = :simulation_id;`,
            {
                replacements: { simulation_id },
                type: sequelize.QueryTypes.SELECT,
            },
        );
        return {
            status: 200,
            data: location,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 200,
            data: {
                msg: "Error occured please try again !",
            },
        };
    }
};

module.exports = getLocationDetailsInteractor;
