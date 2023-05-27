const deleteCompanyInteractor = async (id, Company) => {
    try {
        const deletedCompany = await Company.destroy({
            where: {
                company_id: id,/////
            },
        });

        // deletedCompany will return the number of deleted companys
        if (deletedCompany === 0) {
            return {
                status: 400,
                data: {
                    msg: "Company does not exist !",
                },
            };
        }

        return {
            status: 200,
            data: {
                msg: "Company deleted successfully !",
            },
        };
    } catch (err) {
        console.log('ERROR :',err)
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};

module.exports = deleteCompanyInteractor;
