const express = require("express");
const app = express();
const {
 outlookService,
 outlookEmailService,
 comicService
} = require("./lib/services");

app.use(express.json());

app.get("/comics", async (req, res) => {
 await comicService.sendComicEmail();
 res.end();
});

app.get("/outlook", async (req, res) => {
 const name1 = outlookService.name1;
 const name2 = outlookService.name2;
 const isAvailabel1 = await outlookService.accountNameIsAvailable(name1);
 const isAvailable2 = await outlookService.accountNameIsAvailable(name2);
 const message = `Names available ${name1}: ${isAvailabel1} ${name2}: ${isAvailable2}`;

 console.log(message);
 console.log("=================");

 const isMonday = new Date().getDay() === 1;

 if (isAvailabel1 || isAvailabel2) {
  await outlookEmailService.sendNameAvailableEmail(message);
 } else if (isMonday) {
  await outlookEmailService.sendEmailReminder(message);
 }

 res.end();
});

module.exports = app;