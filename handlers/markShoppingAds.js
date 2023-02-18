const markShoppingAds = async (page, targetShopName) => {
  const shoppingAds = await page.$$(".pla-unit-container");

  if (shoppingAds.length > 0) {
    let shoppingAdsFound = 0;

    for (const ad of shoppingAds) {
      const result = await page.evaluate(
        (targetShopName, ad) => {
          const shopName = ad.querySelector(
            "div.orXoSd > div.rwVHAc.itPOE > div.LbUacb > span"
          )?.textContent;

          console.log("Current shopping ad's shop name: ", shopName);

          if (shopName === targetShopName) {
            ad.style = "border: 3px solid red;";
            return 1;
          } else {
            return 0;
          }
        },
        targetShopName,
        ad
      );

      shoppingAdsFound += result;
    }
    console.log(
      "Search finished. Number of shopping ads found: ",
      shoppingAdsFound
    );
  } else {
    console.log("No shopping ads found!");
  }
};

module.exports = markShoppingAds;
