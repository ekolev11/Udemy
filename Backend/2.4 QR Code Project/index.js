/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import fs from "fs";
import inquirer from "inquirer";

inquirer
.prompt([
  {
    message: "Enter URL.",
    name: "URL",
  }, 
])
.then((answers  =>{
  let url = answers.URL;
  let qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr-img.png'));
  fs.writeFile("URL.txt", url, (err =>{
    if(err) throw (err);
    console.log("success");

  }))



}));