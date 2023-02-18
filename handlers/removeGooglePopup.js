const removeGooglePopup = async (page) => {
  await page.evaluate(() => {
    const body = document.querySelector("body");

    body.style = "overflow: scroll;";

    const overlay1 = document.querySelector("#KjcHPc");
    const overlay2 = document.querySelector("#xe7COe > div.jw8mI");

    overlay1.style = "transform: translateY(100%);";
    overlay2.style = "transform: translateY(100%);";

    const shoppingCarousel = document.querySelector(
      ".commercial-unit-desktop-top"
    );

    console.log("Shopping carousel: ", shoppingCarousel);

    if (shoppingCarousel) {
      const viewportWidth = window.innerWidth;

      console.log("viewport width: ", viewportWidth);

      shoppingCarousel.style = `width: ${viewportWidth}px`;
    }
  });
};

module.exports = removeGooglePopup;
