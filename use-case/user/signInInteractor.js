const { Company } = require("../../models/Company");

const signInInteractor = async ({ infos, User, compare, createUserToken }) => {
    const { email, password } = infos;

    if (!email || !password) {
        return {
            status: 409,
            data: {
                msg: "Invalid credentials"
            },
        };
    }

    try {
        const user = await User.findOne({
            where: {
                email: email,
                confirmed: true,
                has_access: true,
            },
        });

        // if user exist
        if (user !== null) {
            // check for  blocked company
            console.log("user:", user);
            const domainName = user.email.split("@")[1];
            const existCompany = await Company.findOne({
                where: {
                    domain: domainName,
                },
            });
            console.log("exist company: ", existCompany);
            if (existCompany !== null && existCompany.has_access === false) {
                console.log("company blocked");
                return {
                    status: 406,
                    data: {
                        msg: "Company blocked !",
                    },
                };
            }
            /* */

            const comparePasswords = await compare(password, user.password);
            if (comparePasswords) {
                let token = createUserToken(user);
                return {
                    status: 200,
                    data: {
                        fullname: user.fullname,
                        email: user.email,
                        token,
                    },
                };
            }
            return {
                status: 401,
                data: {
                    msg: "Invalid credentials",
                },
            };
        }
        return {
            status: 401,
            data: {
                msg: "Invalid credentials !",
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later",
            },
        };
    }
};

module.exports = signInInteractor;
