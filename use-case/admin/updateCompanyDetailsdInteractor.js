const updateCompanyDetailsInteractor = async (
  Company,
  infos,
  id
) => {
  // console.log(has_access, id);
  // console.log(company_status, company_predict_credit);
  if (!id) {
    return {
      status: 400,
      data: {
        msg: "Invalid crendentials",
      },
    };
  }
  try {
    // checking if the company exist or already doesn't have the access
    const company = await Company.findOne({
      where: {
        company_id: id,
      },
    });

    if (!company) {
      return {
        status: 401,
        data: { msg: "Company does not exist !" },
      };
    }
    

    updateDetails = Company.update(
      infos,
      {
        where: {
          company_id: id,
        },
      }
    );
    if(updateDetails){
      const newCompany = await Company.findByPk(id);
            newCompany.updated_at = new Date();
    return {
      status: 200,
      data: {
        msg:
          
           `Company ${infos.company_status} succesfully`
           
      },
    };}
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
module.exports = updateCompanyDetailsInteractor;
