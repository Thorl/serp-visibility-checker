const markOrganicSearchResults = async (page, targetShopName) => {
  try {
    const organicResults = await page.$$(
      "#rso > div > div > div:not(.EyBRub, .Wt5Tfe, .uVMCKf)"
    );

    if (organicResults.length > 0) {
      let organicResultsFound = 0;

      for (const ad of organicResults) {
        const result = await page.evaluate(
          (targetShopName, ad) => {
            const shopURL = ad.querySelector(
              "#rso div > a > div > cite"
            )?.textContent;

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
      console.log("No organic search results found!");
    }
  } catch (error) {
    console.log(
      "An error occured while marking organic search results: ",
      error
    );
  }
};

module.exports = markOrganicSearchResults;
