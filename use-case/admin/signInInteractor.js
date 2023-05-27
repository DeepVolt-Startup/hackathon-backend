const signInInteractor = async ({
    infos,
    Admin,
    compare,
    createAdminToken,
}) => {
    const { email, password } = infos;
    console.log("email", email);

    if (!email || !password) {
        return {
            status: 400,
            data: { msg: "Invalid crendentials" },
        };
    }
    try {
        const admin = await Admin.findOne({
            where: {
                email: email,
            },
        });
        //console.log(admin);

        if (admin) {
            const comparePasswords = await compare(password, admin.password);
            if (comparePasswords) {
                let accessToken = createAdminToken(admin);
                return {
                    status: 200,
                    data: {
                        fullname : admin.fullname,
                        email: admin.email,
                        accessToken,
                    },
                };
            }
            return {
                status: 403,
                data: {
                    msg: "Invalid credentials",
                },
            };
        }
        return {
            status: 400,
            data: {
                msg: "Invalid credentials",
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured, try again later !",
            },
        };
    }
};

module.exports = signInInteractor;
