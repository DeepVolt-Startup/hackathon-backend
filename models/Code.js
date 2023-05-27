const { sequelize, DataTypes, Sequelize } = require("../db/connect");

const Code = sequelize.define(
    "codes",
    {
        code_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        code_text: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        isUsed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        expired_at: {
            type: DataTypes.DATE,
            defaultValue: () => new Date(new Date().getTime() + 5 * 60000), // current time + 5 minutes
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

const makeCode = (randomNb, validators) => {

    const code = {
        code_text: randomNb,
    };

    return code;
};

module.exports = { Code, makeCode };
