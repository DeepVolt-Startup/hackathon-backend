require("dotenv").config();
const express = require("express");
const { connectDb } = require("./db/connect");
const cors = require("cors");
const userRoutes = require("./routes/user/index");
const adminRoutes = require("./routes/admin/index");
const superAdminRoutes = require("./routes/superAdmin/index");

const app = express();
const morgan = require("morgan");

const path = require("path");

// morgan middleware (http-request logger)
app.use(morgan("combined"));

// to parse JSON data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// to prevent blocking the http requests
app.use(cors());

// to parse incoming requests that contains JSON payloads
app.use(express.json());

// user routes
app.use("/api/v1/user", userRoutes);

// admin routes
app.use("/api/v1/admin", adminRoutes);

// super admin routes
app.use("/api/v1/super-admin", superAdminRoutes);

const PORT = process.env.PORT || 5000;

app.use(express.static("./dlia-client"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dlia-client/index.html"));
});

// db connection
const start = async () => {
    try {
        await connectDb();
        console.log("successfully connected to db");
        app.listen(PORT, () => {
            // then we launch our server
            console.log(`server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
