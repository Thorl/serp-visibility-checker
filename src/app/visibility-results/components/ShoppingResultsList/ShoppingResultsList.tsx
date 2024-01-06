import ShoppingResult from "../ShoppingResult/ShoppingResult";

import styles from "./ShoppingResultsList.module.css";

const shoppingResultMock = [
  {
    image_url: "https://fakeimg.pl/200x200/",
    title: "Popcorn machine",
    shop_link: "https://www.example.com",
    rank: 2,
  },
  {
    image_url: "https://fakeimg.pl/200x200/",
    title: "Ozone Generator",
    shop_link: "https://www.example.com",
    rank: 1,
  },
];

export const ShoppingResultsList = () => {
  return (
    <div className={styles.shoppingResultsList}>
      <h4>Image</h4>
      <h4>Product name</h4>
      <h4>URL</h4>
      <h4>Position</h4>
      {shoppingResultMock.map((result) => {
        const id = crypto.randomUUID();
        return (
          <ShoppingResult
            key={id}
            image_url={result.image_url}
            title={result.title}
            shop_link={result.shop_link}
            rank={result.rank}
          />
        );
      })}
    </div>
  );
};
