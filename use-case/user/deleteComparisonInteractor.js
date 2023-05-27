const deleteComparisonInteractor = async (
    Comparison,
    comparisons,
    ComparisonLocation,
) => {
    try {
        if (!comparisons) {
            return {
                status: 409,
                data: {
                    msg: "Invalid inputs !",
                },
            };
        }
        const deletedComparisons = await Comparison.destroy({
            where: {
                comparison_id: comparisons,
            },
            cascade: true, // This enables cascading delete
            include: [
                {
                    model: ComparisonLocation,
                    onDelete: "CASCADE", // This sets the onDelete option for the foreign key constraint
                },
            ],
        });
        console.log(deletedComparisons);

        if (deletedComparisons === 0) {
            return {
                status: 400,
                data: {
                    msg: "Comparison does not exist !",
                },
            };
        }

        return {
            status: 200,
            data: {
                msg: "Comparisons deleted successfully !",
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

module.exports = deleteComparisonInteractor;
