const sendInvitationInteractor = async (
    User,
    sendingEmail,
    id,
    editorData,
    join,
) => {
    //sending email to the user
    try {
        let subject = ` DeepVolt Location Intelligence Assistant is here! `;
        let attachments = [
            {
                filename: "pic-v1.png",
                path: join(__dirname, "..", "..", "img", "pic-v1.png"),
                cid: "logo",
            },
        ];
        console.log("iiiiiiiiiiddddd", id);
        const user = await User.findByPk(id);

        let htmlCode = editorData;
        console.log("ooooooo", user);

        if (!user) {
            // return res.status(404).send("User not found");
            return {
                status: 401,
                data: {
                    msg: "Invalid credentials",
                },
            };
        }

        sendingEmail(user.dataValues.email, subject, htmlCode, attachments);

        // incrementing num of sent invitation
        await user.increment("sent_invitations_count", { by: 1 });

        user.save();

        return {
            status: 200,
            data: {
                msg: "Invitation sent succesfully ",
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: { msg: "Error occured, try again later !" },
        };
    }
};

module.exports = sendInvitationInteractor;
