const { sequelize } = require("../../db/connect");

const getComparisonDetailsInteractor = async (comparison_id) => {
    try {
        const allComparisons = await sequelize.query(
            `
            SELECT *
            FROM comparison_locations AS cl
            JOIN locations AS l ON l.location_id = cl.location_id
            WHERE cl.comparison_id = :comparison_id;
            `,
            {
                replacements: { comparison_id },
                type: sequelize.QueryTypes.SELECT,
            },
        );
        return {
            status: 200,
            data: allComparisons,
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

module.exports = getComparisonDetailsInteractor;
