require("dotenv").config();
const express = require("express");
const listingsRoute = require('./routes/listingsRoute');
const userRoute = require('./routes/userRoute');

const PORT = 8080 || process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/listings", listingsRoute);
app.use("/api/users", userRoute);

app.listen(8080, () => {
    console.log("Server...")
})