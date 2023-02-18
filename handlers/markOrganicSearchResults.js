const markOrganicSearchResults = async (page, targetShopName) => {
  const organicResults = await page.$$(
    "#rso > div > div > div:not(.EyBRub, .Wt5Tfe, .uVMCKf)"
  );

  if (organicResults) {
    let organicResultsFound = 0;

    for (const ad of organicResults) {
      const result = await page.evaluate(
        (targetShopName, ad) => {
          const shopURL = ad.querySelector(
            "#rso div > a > div > cite"
          )?.textContent;

          console.log("Current organic result's URL: ", shopURL);

          if (shopURL?.includes(targetShopName)) {
            ad.style = "border: 3px solid red;";
            return 1;
          } else {
            return 0;
          }
        },
        targetShopName,
        ad
      );

      organicResultsFound += result;
    }
    console.log(
      "Search finished. Number of organic search results found: ",
      organicResultsFound
    );
  } else {
    console.log("No search ads found!");
  }
};

module.exports = markOrganicSearchResults;
