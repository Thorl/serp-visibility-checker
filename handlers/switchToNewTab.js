const switchToNewTab = async (browser, oldPage) => {
  const oldTarget = await oldPage.target();

  const newTarget = await browser.waitForTarget(
    (target) => target.opener() === oldTarget
  );

  const newTab = await newTarget.page();

  return newTab;
};

module.exports = switchToNewTab;
