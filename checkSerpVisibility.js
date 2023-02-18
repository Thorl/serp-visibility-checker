require("puppeteer");

const markShoppingAds = require("./handlers/markShoppingAds");
const markSearchAds = require("./handlers/markSearchAds");
const markOrganicSearchResults = require("./handlers/markOrganicSearchResults");
const removeGooglePopup = require("./handlers/removeGooglePopup");
const takeScreenshot = require("./handlers/takeScreenshot");
const clearInputFields = require("./handlers/clearInputFields");
const makeKeywordSearch = require("./handlers/makeKeywordSearch");

const checkSerpVisibility = async (
  browser,
  isearchfromPage,
  targetCountry,
  targetLanguage,
  targetShopName,
  searchQuery
) => {
  try {
    clearInputFields(isearchfromPage);

    makeKeywordSearch(
      isearchfromPage,
      searchQuery,
      targetCountry,
      targetLanguage
    );

    await isearchfromPage.waitForNavigation({ waitUntil: "load" });

    const pageTarget = await isearchfromPage.target();

    const newTarget = await browser.waitForTarget(
      (target) => target.opener() === pageTarget
    );

    const googleSERP = await newTarget.page();

    await googleSERP.waitForSelector("#CXQnmb > div > div");

    //@Comment: Above code commented out for testing purposes.

    // const googleSERP = await browser.newPage();

    /*   await googleSERP.goto(
    "https://www.google.com/search?q=popcornmaschine&glp=1&adtest=on&safe=images&safe=high"
  ); */

    removeGooglePopup(googleSERP);

    markShoppingAds(googleSERP, targetShopName);

    markSearchAds(googleSERP, targetShopName);

    markOrganicSearchResults(googleSERP, targetShopName);

    // takeScreenshot(googleSERP, targetShopName, searchQuery);

    // await googleSERP.close();
  } catch (error) {
    console.log("An error occured while checking SERP visibility: ", error);
  }
};

module.exports = checkSerpVisibility;
