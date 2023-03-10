const markShoppingAds = require("./handlers/markShoppingAds");
const markSearchAds = require("./handlers/markSearchAds");
const markOrganicSearchResults = require("./handlers/markOrganicSearchResults");
const removeGooglePopup = require("./handlers/removeGooglePopup");
const takeScreenshot = require("./handlers/takeScreenshot");
const clearInputFields = require("./handlers/clearInputFields");
const makeKeywordSearch = require("./handlers/makeKeywordSearch");
const switchToNewTab = require("./handlers/switchToNewTab");

const checkSerpVisibility = async (
  browser,
  isearchfromPage,
  targetCountry,
  targetLanguage,
  targetShopName,
  searchQuery
) => {
  try {
    await clearInputFields(isearchfromPage);

    await makeKeywordSearch(
      isearchfromPage,
      searchQuery,
      targetCountry,
      targetLanguage
    );

    console.log(`***Starting search for ${searchQuery}***`);

    const googleSERP = await switchToNewTab(browser, isearchfromPage);

    await googleSERP.setViewport({ width: 0, height: 0 });

    await googleSERP.waitForSelector("#search");

    await googleSERP.waitForTimeout(1000);

    await removeGooglePopup(googleSERP);

    await markShoppingAds(googleSERP, targetShopName);

    await markSearchAds(googleSERP, targetShopName);

    await markOrganicSearchResults(googleSERP, targetShopName);

    await takeScreenshot(googleSERP, targetShopName, searchQuery);

    console.log(`***Ending search for ${searchQuery}***`);

    await googleSERP.close();
  } catch (error) {
    console.log("An error occured while checking SERP visibility: ", error);
  }
};

module.exports = checkSerpVisibility;
