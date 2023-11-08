import express from "express";
const PORT = 8080 || process.env.PORT;

const app = express();

app.listen(8080, () => {
    console.log("Server...")
})