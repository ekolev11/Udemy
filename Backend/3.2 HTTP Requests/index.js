import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
});
app.get("/contact", (req, res) => {
    res.send("<h1>Instagram</h1><h2>Facebook</h2>")


});
app.get("/about", (req, res) => {
    res.send("<p>I like to code, i hope one day i will be able to land a job as a developer and do what i enjoy.</p>")
});

app.listen(port, () =>{
    console.log(`Server is working on port ${port}.`);

});