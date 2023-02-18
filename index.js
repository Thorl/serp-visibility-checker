const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const checkSerpVisibility = require("./checkSerpVisibility");

const TARGET_COUNTRY = "Germany";
const TARGET_LANGUAGE = "German";
const SEARCH_QUERY = "popcornmaschine";
const TARGET_SHOP_NAME = "expondo.de";

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });

    const isearchfromPage = await browser.newPage();

    await isearchfromPage.goto("http://isearchfrom.com/");

    checkSerpVisibility(
      browser,
      isearchfromPage,
      TARGET_COUNTRY,
      TARGET_LANGUAGE,
      TARGET_SHOP_NAME,
      SEARCH_QUERY
    );

    /*  const screenshotDirectory = `screenshots/${TARGET_SHOP_NAME}`;
 
    const files = fs.readdirSync(screenshotDirectory);

      for (const file of files) {
        fs.unlinkSync(path.join(screenshotDirectory, file));
      } */
  } catch (error) {
    console.log("An error occurred while running index.js: ", error);
  }
})();
