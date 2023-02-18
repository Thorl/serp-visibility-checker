const markSearchAds = async (page, targetShopName) => {
  const searchAds = await page.$$(".uEierd");

  if (searchAds.length > 0) {
    let searchAdsFound = 0;

    for (const ad of searchAds) {
      const result = await page.evaluate(
        (targetShopName, ad) => {
          const shopName = ad
            .querySelector("div.v5yQqb > a")
            ?.getAttribute("data-pcu");

          console.log("Current search ad's shop name: ", shopName);

          if (shopName?.includes(targetShopName)) {
            ad.style = "border: 3px solid red;";
            return 1;
          } else {
            return 0;
          }
        },
        targetShopName,
        ad
      );

      searchAdsFound += result;
    }
    console.log(
      "Search finished. Number of search ads found: ",
      searchAdsFound
    );
  } else {
    console.log("No search ads found!");
  }
};

module.exports = markSearchAds;
