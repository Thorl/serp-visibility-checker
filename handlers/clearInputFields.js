const clearInputFields = async (page) => {
  await page.evaluate((countryInput, languageInput, searchQueryInput) => {
    const countryInputEl = document.querySelector("#countrytags");
    const languageInputEl = document.querySelector("#languagetags");
    const searchQueryInputEl = document.querySelector("#searchinput");

    countryInputEl.value = "";
    languageInputEl.value = "";
    searchQueryInputEl.value = "";
  });
};

module.exports = clearInputFields;
