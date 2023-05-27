const saveComparisonInteractor = async (
    locations,
    comparison,
    Comparison,
    makeComparison,
    Location,
    makeLocation,
    ComparisonLocation,
    user_id,
    t,
    sequelize,
    Iris,
    Grid,
    nb_POIs,
    nbChargePts,
) => {
    try {
        console.log(user_id);
        locations = locations.map((location) => {
            return makeLocation({
                ...location,
                user_id,
            });
        });
        comparison = makeComparison({ ...comparison, user_id, compared_locations_count:locations.length });

        // save all compared locations at once
        const comparedLocations = await Location.bulkCreate(locations, {
            transaction: t,
        });

        console.log("compared locations:", comparedLocations);
        // save comparison
        const savedComparison = await Comparison.create(comparison, {
            transaction: t,
        });
        for (let i = 0; i < comparedLocations.length; i++) {
            await ComparisonLocation.create(
                {
                    comparison_id: savedComparison.dataValues.comparison_id,
                    location_id: comparedLocations[i].dataValues.location_id,
                },
                { transaction: t },
            );
        }
        await t.commit();
        return {
            status: 200,
            data: {
                comparedLocations,
                savedComparison,
            },
        };
    } catch (err) {
        console.log(err);
        await t.rollback();
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};

module.exports = saveComparisonInteractor;
