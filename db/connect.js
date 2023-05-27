const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: "postgres",
        port: process.env.PORT_DB,
        logging: false, // to stop looging query result on the console
    },
);

const connectDb = async () => {
    return await sequelize.authenticate(); // we can warp sequlize.authenticate() with new Promise((resolve,reject)=>{})
};

module.exports = { connectDb, sequelize, Sequelize, DataTypes, Model };
