const fs = require("fs");

const takeScreenshot = async (page, targetShopName, searchQuery) => {
  const screenshotDirectory = `screenshots/${targetShopName}`;

  if (!fs.existsSync(screenshotDirectory)) {
    fs.mkdirSync(screenshotDirectory, { recursive: true });
  }

  await page.screenshot({
    path: `${screenshotDirectory}/${targetShopName}-${searchQuery}.jpg`,
  });
};

module.exports = takeScreenshot;
