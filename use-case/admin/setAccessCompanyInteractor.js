

const setAccessCompanyInteractor=async(Company,has_access,id)=>{
    console.log(has_access, id)
    if (!id) {
        return {
          status: 400,
          data: {
            msg: "Invalid crendentials"
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
        let blockedCompany;
        
        blockedCompany = Company.update({
            has_access,
          },
          {
            where: {
              company_id: id,
            },
          }
        );
        return {
          status: 200,
          data: {
            msg: has_access === true
              ? "Company unblocked succesfully"
              : "Company blocked succesfully",
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
    module.exports=setAccessCompanyInteractor;
    