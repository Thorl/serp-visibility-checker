const switchToNewTab = async (browser, oldPage) => {
  try {
    const oldTarget = await oldPage.target();

    const newTarget = await browser.waitForTarget(
      (target) => target.opener() === oldTarget
    );

    const newTab = await newTarget.page();

    return newTab;
  } catch (error) {
    console.log(
      "An error occured while switching to the Google SERP tab: ",
      switchToNewTab
    );
  }
};

module.exports = switchToNewTab;
