const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const checkSerpVisibility = require("./checkSerpVisibility");
const markShoppingAds = require("./handlers/markShoppingAds");
const markSearchAds = require("./handlers/markSearchAds");
const markOrganicSearchResults = require("./handlers/markOrganicSearchResults");
const removeGooglePopup = require("./handlers/removeGooglePopup");
const takeScreenshot = require("./handlers/takeScreenshot");
const clearInputFields = require("./handlers/clearInputFields");
const makeKeywordSearch = require("./handlers/makeKeywordSearch");

const TARGET_COUNTRY = "Germany";
const TARGET_LANGUAGE = "German";
const SEARCH_QUERY = "popcornmaschine";
const TARGET_SHOP_NAME = "expondo.de";

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      // args: ["--start-maximized"],
      defaultViewport: false,
    });

    const isearchfromPage = await browser.newPage();

    isearchfromPage.setViewport({ width: 0, height: 0 });

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
