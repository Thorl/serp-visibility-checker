const puppeteer = require("puppeteer");

const TARGET_URL = "http://isearchfrom.com/";
const TARGET_COUNTRY = "Germany";
const TARGET_LANGUAGE = "German";
const SEARCH_QUERY = "schweißtisch";
const TARGET_SHOP_NAME = "expondo.de";

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });

    /*     const isearchfromPage = await browser.newPage();

    await isearchfromPage.goto(TARGET_URL);

    const countryInput = "#countrytags";
    const languageInput = "#languagetags";
    const searchQueryInput = "#searchinput";

    await isearchfromPage.type(countryInput, TARGET_COUNTRY);
    await isearchfromPage.type(languageInput, TARGET_LANGUAGE);
    await isearchfromPage.type(searchQueryInput, SEARCH_QUERY);

    const searchButton = "#searchbutton";

    await isearchfromPage.click(searchButton);

    const pageTarget = isearchfromPage.target();

    const newTarget = await browser.waitForTarget(
      (target) => target.opener() === pageTarget
    );

    const googleSERP = await newTarget.page(); */

    // await googleSERP.waitForSelector("#L2AGLb");

    //@Comment: Above code commented out for testing purposes.

    const googleSERP = await browser.newPage();

    await googleSERP.goto(
      "https://www.google.com/search?q=popcornmaschine&glp=1&adtest=on&safe=images&safe=high"
    );

    await googleSERP.evaluate(() => {
      const body = document.querySelector("body");

      body.style = "overflow: scroll;";

      const overlay1 = document.querySelector("#KjcHPc");
      const overlay2 = document.querySelector("#xe7COe > div.jw8mI");

      overlay1.style = "transform: translateY(100%);";
      overlay2.style = "transform: translateY(100%);";

      const shoppingCarousel = document.querySelector(
        ".commercial-unit-desktop-top"
      );

      if (shoppingCarousel) {
        const viewportWidth = window.innerWidth;

        shoppingCarousel.style = `width: ${viewportWidth}px`;
      }
    });

    const shoppingAds = await googleSERP.$$(".pla-unit-container");

    if (shoppingAds) {
      let shoppingAdsFound = 0;

      for (const ad of shoppingAds) {
        const result = await googleSERP.evaluate(
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
          TARGET_SHOP_NAME,
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

    const searchAds = await googleSERP.$$(".uEierd");

    if (searchAds) {
      let searchAdsFound = 0;

      for (const ad of searchAds) {
        const result = await googleSERP.evaluate(
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
          TARGET_SHOP_NAME,
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

    const organicResults = await googleSERP.$$(
      "#rso > div > div > div:not(.EyBRub, .Wt5Tfe, .uVMCKf)"
    );

    if (organicResults) {
      let organicResultsFound = 0;

      for (const ad of organicResults) {
        const result = await googleSERP.evaluate(
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
          TARGET_SHOP_NAME,
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
  } catch (error) {
    console.log("An error occurred while performing the search: ", error);
  }
})();
