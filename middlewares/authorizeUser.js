const { Company } = require("../models/Company");
const { User } = require("../models/User");

const authorizeUser = async (req, res, next) => {
  try {
    //if the frontend sends email in the body
    if (req.body && req.body.email) {
      const user = await User.findOne({
        where: {
          email: req.body.email,
          confirmed: true,
          has_access: true,
        },
      });
      const domainName = user.dataValues.email.split("@")[1];
      const existCompany = await Company.findOne({
        where: {
          domain: domainName,
        },
      });
      // company hasn't access
      if (existCompany === null || existCompany.dataValues.has_access === false) {
          return res.status(401).json({
              status: 401,
              data: {
                msg: "Company blocked!",
              },
            });
      }
      // if(user.company){}
      if (user !== null) {
        const { has_access } = user.dataValues;

        if (has_access === false) {
          return res.status(401).json({
            status: 401,
            data: {
              msg: "Unauthorized !",
            },
          });
        } else {
          next();
          return;
        }
      } else {
        return res.status(409).json({
          status: 409,
          data: {
            msg: "Invalid credentials !",
          },
        });
      }
    }

    // else we take it from the token
    const { id } = req.token;

    const user = await User.findByPk(id);

    const domainName = user.dataValues.email.split("@")[1];
    const existCompany = await Company.findOne({
      where: {
        domain: domainName,
      },
    });
    // company hasn't access
    if (existCompany === null || existCompany.dataValues.has_access === false) {
        return res.status(401).json({
            status: 401,
            data: {
              msg: "Company blocked!",
            },
          });
    }
    if (user === null) {
      return res.status(401).json({
        status: 401,
        data: {
          msg: "User doesn't exist !",
        },
      });
    } else if (user.dataValues.has_access === false) {
      return res.status(401).json({
        status: 401,
        data: {
          msg: "Unauthorized !",
        },
      });
    } else if (user.dataValues.confirmed === false) {
      return res.status(401).json({
        status: 401,
        data: {
          msg: "Unauthorized !",
        },
      });
    } else {
      next();
      return;
    }
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      status: 501,
      data: {
        msg: "Error occured, please try later !",
      },
    });
  }
};

module.exports = authorizeUser;
