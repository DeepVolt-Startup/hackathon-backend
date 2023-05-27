const createUserInteractor = async (
    infos,
    User,
    hashSync,
    validators,
    makeCompany,
    Company,
    sendInvitationEmail,
    sendingEmail,
    join,
    htmlCode,
) => {
    try {
        //const user = new User(makeUser(infos, validators));
        let user = new User({ ...infos });

        user = user.makeUser(validators);

        const userExist = await User.findOne({
            where: {
                email: user.email,
            },
        });

        if (userExist !== null) {
            return {
                status: 409,
                data: {
                    msg: "User already exist !",
                    fullname: userExist.fullname,
                    email: userExist.email,
                },
            };
        }
        const domainName = user.email.split("@")[1];

        const company = new Company(makeCompany(domainName));

        const existCompany = await Company.findOne({
            where: {
                domain: domainName,
            },
        });

        let companyID = "";

        // if company does not exist
        if (existCompany === null) {
            await Company.create(company.dataValues);
            companyID = company.dataValues.company_id;
        }
        // if company exist
        if (existCompany !== null) {
            companyID = existCompany.dataValues.company_id;
        }

        // company hasn't access
        if (existCompany !== null && existCompany.has_access === false) {
            return {
                status: 406,
                data: {
                    msg: "Company blocked !",
                },
            };
        }

        const createdUser = await User.create({
            fullname: user.fullname,
            email: user.email,
            country: user.country,
            company: user.company,
            position: user.position,
            password: hashSync(user.password, 8),
            phone_number: user.phone_number,
            company_id: companyID,
        });
        if (sendInvitationEmail === true) {
            let subject = ` DeepVolt Location Intelligence Assistant is here! `;
            let attachments = [
                {
                    filename: "pic-v1.png",
                    path: join(__dirname, "..", "..", "img", "pic-v1.png"),
                    cid: "logo",
                },
            ];
            console.log(user);

            sendingEmail(user.email, subject, htmlCode, attachments);

            // incrementing num of sent invitation
            await createdUser.increment("sent_invitations_count", { by: 1 });

            createdUser.save();
        }
        return {
            status: 200,
            data: {
                id: createdUser.user_id,
                fullname: createdUser.fullname,
                email: createdUser.email,
                phone_number: createdUser.phone_number,
                company: createdUser.company,
                position: createdUser.position,
                country: createdUser.country,
                confirmed:true,
                hasAccess: createdUser.has_access,
                created_at: createdUser.created_at,
                updated_at: createdUser.updated_at,
                company_id: createdUser.company_id,
                sent_invitations_count: createdUser.sent_invitations_count,
            },
        };
    } catch (err) {
        console.log(err);

        if (err.message.includes("Invalid")) {
            return {
                status: 401,
                data: {
                    msg: err.message,
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
};

module.exports = createUserInteractor;
