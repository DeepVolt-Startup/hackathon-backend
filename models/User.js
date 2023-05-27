const { DataTypes, Sequelize, Model, sequelize } = require("../db/connect");
const { Comparison } = require("./Comparison");
const { Location } = require("./Location");

class User extends Model {
    // first method
    makeUser(validators) {
        const { isEmail, validFullName, validPwd, validPhoneNumber } =
            validators;

        console.log(isEmail);
        const {
            fullname,
            email,
            country,
            company,
            position,
            password,
            phone_number,
        } = this;
        if (
            !validFullName(fullname) ||
            !isEmail(email) ||
            !country ||
            !company ||
            !position ||
            !validPwd(password) ||
            !validPhoneNumber(phone_number)
        ) {
            throw new Error("Invalid credentials");
        } else {
            return {
                fullname,
                email,
                country,
                company,
                position,
                password,
                phone_number,
            };
        }
    }
}

User.init(
    {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        has_access: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        company_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "companies",
                key: "company_id",
            },
            onDelete: "CASCADE",
        },
        sent_invitations_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
        sequelize: sequelize, // We need to pass the connection instance
        modelName: "users", // We need to choose the model name
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

User.hasMany(Location, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comparison, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = { User };
