import express from "express";
const app = express();
const port = 1121;

app.get("/", (req, res) => {
    res.send("Hello, dude!");

});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});