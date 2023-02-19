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

    const pageTarget = await isearchfromPage.target();

    const newTarget = await browser.waitForTarget(
      (target) => target.opener() === pageTarget
    );

    const googleSERP = await newTarget.page();

    await googleSERP.setViewport({ width: 0, height: 0 });

    await googleSERP.waitForSelector("#search");

    await removeGooglePopup(googleSERP);

    await markShoppingAds(googleSERP, targetShopName);

    await markSearchAds(googleSERP, targetShopName);

    await markOrganicSearchResults(googleSERP, targetShopName);

    await takeScreenshot(googleSERP, targetShopName, searchQuery);

    await googleSERP.close();
  } catch (error) {
    console.log("An error occured while checking SERP visibility: ", error);
  }
};

module.exports = checkSerpVisibility;
