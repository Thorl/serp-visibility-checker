const markShoppingAds = async (page, targetShopName) => {
  try {
    const shoppingAds = await page.$$(".pla-unit-container");

    if (shoppingAds.length > 0) {
      let shoppingAdsFound = 0;

      for (const ad of shoppingAds) {
        const result = await page.evaluate(
          (targetShopName, ad) => {
            const shopName = ad.querySelector(
              "div.orXoSd > div.rwVHAc > div.LbUacb > span"
            )?.textContent;

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
  } catch (error) {
    console.log("An error occurred while marking shopping ads: ", error);
  }
};

module.exports = markShoppingAds;
