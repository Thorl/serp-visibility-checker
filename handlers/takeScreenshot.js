const fs = require("fs");

const takeScreenshot = async (page, targetShopName, searchQuery) => {
  try {
    const screenshotDirectory = `screenshots/${targetShopName}`;

    if (!fs.existsSync(screenshotDirectory)) {
      fs.mkdirSync(screenshotDirectory, { recursive: true });
    }

    await page.screenshot({
      path: `${screenshotDirectory}/${targetShopName}-${searchQuery}.jpg`,
    });
  } catch (error) {
    console.log("An error occured while taking a screenshot: ", error);
  }
};

module.exports = takeScreenshot;
