import express from "express";
const app = express();
const port = 3000;



app.get("/", (req, res) => {
    let a = new Date();
    let day = a.getDay();
    let adv = "";
    let workOrParty = "";
      if (day === 0 || day === 6){
          workOrParty = "weekend"
          adv = "it's time to party hard";
      }else{
          workOrParty = "weekday"
          adv = "it's time to work hard";
      }
    res.render("index.ejs", {
      
      dayType: workOrParty,
      advice: adv
    });
  });
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


