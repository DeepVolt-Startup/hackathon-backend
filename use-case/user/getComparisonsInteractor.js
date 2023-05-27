const getComparisonInteractor = async (Comparison, id) => {
    try {
        const allComparisons = await Comparison.findAll({
            where: {
                user_id: id,
            },
        });
        return {
            status: 200,
            data: allComparisons,
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

module.exports = getComparisonInteractor;
