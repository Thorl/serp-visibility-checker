const puppeteer = require("puppeteer");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const checkSerpVisibility = require("./checkSerpVisibility");
const sendEmail = require("./handlers/sendEmail");

const TARGET_COUNTRY = "Germany";
const TARGET_LANGUAGE = "German";
const SEARCH_QUERIES = [
  "kontrollwaage",
  "popcornmaschine",
  "elektroheizer",
  "dieselpumpe",
  "ozongenerator",
  "brutapparat",
];
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

    const de = {
      country: TARGET_COUNTRY,
      language: TARGET_LANGUAGE,
      shopName: TARGET_SHOP_NAME,
      searchQueries: SEARCH_QUERIES,
    };

    const requestedVisibilityChecks = [de];

    for (let i = 0; i < requestedVisibilityChecks.length; i++) {
      const country = requestedVisibilityChecks[i].country;
      const language = requestedVisibilityChecks[i].language;
      const shopName = requestedVisibilityChecks[i].shopName;

      const numberOfSearchQueries =
        requestedVisibilityChecks[i].searchQueries.length;

      for (let j = 0; j < numberOfSearchQueries; j++) {
        const seachQuery = requestedVisibilityChecks[i].searchQueries[j];
        await checkSerpVisibility(
          browser,
          isearchfromPage,
          country,
          language,
          shopName,
          seachQuery
        );
      }

      if (i === requestedVisibilityChecks.length - 1) {
        console.log("Visibility check finished. Sending email...");
        await sendEmail("thorslof@hotmail.com", "expondo.de");
      }
    }

    /*  const screenshotDirectory = `screenshots/${TARGET_SHOP_NAME}`;
 
    const files = fs.readdirSync(screenshotDirectory);

      for (const file of files) {
        fs.unlinkSync(path.join(screenshotDirectory, file));
      } */
  } catch (error) {
    console.log("An error occurred while running index.js: ", error);
  }
})();
