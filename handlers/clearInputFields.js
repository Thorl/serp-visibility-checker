const clearInputFields = async (page) => {
  try {
    await page.evaluate(() => {
      const countryInputEl = document.querySelector("#countrytags");
      const languageInputEl = document.querySelector("#languagetags");
      const searchQueryInputEl = document.querySelector("#searchinput");

      countryInputEl.value = "";
      languageInputEl.value = "";
      searchQueryInputEl.value = "";
    });
  } catch (error) {
    console.log("An error occurred while clearing input fields: ", error);
  }
};

module.exports = clearInputFields;
