const addCompanyInteractor=async(infos,Company,sequelize,QueryTypes,makeCompany)=>{
try{
   
    console.log(infos)
    const company= new Company(makeCompany(infos));

    const companyExist=await Company.findOne({
        where:{
            domain:company.domain,
        },
    });

    if(companyExist!==null){
        return {
            status:400,
            data:{
                msg:"This company already exists !",
            }
        };
    }
    //executing the transaction
    const createdCompany=await Company.create(company.dataValues);
    console.log(createdCompany);
    const companies = await sequelize.query(
        "SELECT companies.company_id, companies.created_at, companies.updated_at, companies.has_access, companies.domain, count(users.company_id) FROM  companies LEFT JOIN users ON companies.company_id = users.company_id   GROUP BY companies.domain,companies.has_access,companies.company_id;",
        { type: QueryTypes.SELECT }
      );
    return {
        status:200,
        data: {
            createdCompany,companies
        }
    }
    
}
catch(err){
    console.log(err);
    if (err.message.includes("Invalid")) {
        return {
            status: 401,
            data: {
                msg: err.message, // this error will come from makeAdmin() fct (throw error(...))
            },
        };
    } else {
        return {
            status: 501,
            data: {
                msg: "Error occured, please try again later !",
            },
        };
    }

}
}
module.exports=addCompanyInteractor;