const removeGooglePopup = async (page) => {
  try {
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

      if (shoppingCarousel) {
        const viewportWidth = window.innerWidth;

        shoppingCarousel.style = `width: ${viewportWidth}px`;
      }
    });
  } catch (error) {
    console.log(
      "An error occurred while removing the Google cookie consent popup: ",
      error
    );
  }
};

module.exports = removeGooglePopup;
