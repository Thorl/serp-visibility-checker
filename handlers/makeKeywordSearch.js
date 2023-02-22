const makeKeywordSearch = async (
  page,
  searchQuery,
  targetCountry,
  targetLanguage
) => {
  try {
    await page.type("#countrytags", targetCountry);
    await page.type("#languagetags", targetLanguage);
    await page.type("#searchinput", searchQuery);

    const searchButton = "#searchbutton";

    await page.click(searchButton);
  } catch (error) {
    console.log(
      `An error occured while making a keyword search for ${searchQuery}:`,
      error
    );
  }
};

module.exports = makeKeywordSearch;
