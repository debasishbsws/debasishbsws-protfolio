const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");

// const devloperRouter = require("./routes/devloper");
// const photographerRouter = require("./routes/photographer");

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

//json support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//serve static files
app.use(express.static(path.join(__dirname, "public")));

//home route
app.get("/", (req, res) => {
    res.render("index");
});

// //dev route
// app.use("/dev", devloperRouter);
// //photographer route
// app.use("/photo", photographerRouter);

async function start() {
    try {
        await connectDB("mongodb://localhost:27017/express-mongo");
        app.listen(PORT, () => {
            console.log("Server is running in port " + PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

start();

function connectDB(URI) {
    console.log("Database no need to connect yet...");
}

module.exports = app;
