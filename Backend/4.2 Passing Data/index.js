import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var firstN = "";
var lastN = "";
let print = "";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")

});

app.post("/submit", (req, res) => {
  const data = req.body;
  firstN = data.fName;
  lastN = data.lName;
  print = (firstN + lastN).length
  res.render("index.ejs", {
    firstN,
    lastN,
    print
  })
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
