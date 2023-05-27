const blockAccessInteractor = async (id, User, has_access) => {
    console.log(has_access)
  // checking the email :
  if (!id) {
    return {
      status: 400,
      data: { msg: "Invalid crendentials" },
    };
  }
  try {
    // checking if the user exist or already doesn't have the access
    const user = await User.findOne({
      where: {
        user_id: id,
      },
    });

    if (!user) {
      return {
        status: 401,
        data: { msg: "User does not exist !" },
      };
    }
    let blockedUser;

    blockedUser = User.update(
      {
        has_access,
      },
      {
        where: {
          user_id: id,
        },
      }
    );
    return {
      status: 200,
      data: {
        msg: has_access
          ? "User unblocked succesfully"
          : "User blocked succesfully",
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

module.exports = blockAccessInteractor;
