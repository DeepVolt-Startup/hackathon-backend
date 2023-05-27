const getCompaniesInteractor = async (User, sequelize, QueryTypes) => {
  try {
    const companies = await sequelize.query(
      "SELECT companies.company_id, companies.company_predict_credit,companies.created_at, companies.company_status, companies.updated_at, companies.has_access, companies.domain, count(users.company_id) FROM  companies LEFT JOIN users ON companies.company_id = users.company_id   GROUP BY companies.domain,companies.has_access,companies.company_id,companies.company_predict_credit,companies.company_status;",
      { type: QueryTypes.SELECT }
    );
    // We didn't need to destructure the result here - the results were returned directly
    console.log(companies)
    return {
      status: 200,
      data: companies,
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

module.exports = getCompaniesInteractor;
