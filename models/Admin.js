const { sequelize, DataTypes, Sequelize } = require("../db/connect");
const { validFullName, isEmail, validPwd, validRole } = require("../utils/validators");

const Admin = sequelize.define("admins", {
        admin_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        fullname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

const makeAdmin = (admin) => {
    const { fullname, email, password, role } = admin;

    if (!fullname || !isEmail(email) || !validPwd(password) || !validRole(role)) {
        throw new Error("Invalid credentials");
    } else {
        return {
            fullname,
            email,
            password,
            role,
        };
    }
};

module.exports = { Admin, makeAdmin };
