const puppeteer = require("puppeteer");

class ComitStripService {
 async getComicImageUrl() {
  console.log("getComicImageUrl");
  console.log("----------------");

  const browser = await puppeteer.launch({
   args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  const dateString = new Date().toISOString().split("T")[0];
  const dateUrl = dateString.replace(/-/g, "/");
  
  try {
   await page.goto(`http://www.comitstrip.com/en/${dateUrl}`);
   console.log(`Visited: http://www.comitstrip.com/en/${dateUrl}`);
   console.log("------------------------------------------------");
   await this._clickFirstSectionAnchor(page);
   const text = await this._getFirstImageUrl(page);
   await browser.close();
   return text;
  } catch(error) {
   console.log(error.stack);
   console.log("----------");
   return "";
  }
 }
}