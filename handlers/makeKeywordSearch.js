const makeKeywordSearch = async (
  page,
  searchQuery,
  targetCountry,
  targetLanguage
) => {
  await page.type("#countrytags", targetCountry);
  await page.type("#languagetags", targetLanguage);
  await page.type("#searchinput", searchQuery);

  const searchButton = "#searchbutton";

  await page.click(searchButton);
};

module.exports = makeKeywordSearch;
