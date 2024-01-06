import Link from "next/link";

import ShoppingResult from "./components/ShoppingResult";

import styles from "./page.module.css";

export default function VisibilityResults() {
  const shoppingResultMock = [
    {
      image_url: "https://fakeimg.pl/200x200/",
      title: "Popcorn machine",
      shop_link: "https://www.example.com",
      rank: 2,
    },
  ];
  return (
    <main className={styles.visibilityResults}>
      <Link className={styles.search__homeLink} href="/search">
        Home
      </Link>
      <h2>Showing visibility for keyword:</h2>
      <h3>Gabagool</h3>

      <h3 className={styles.visibilityResults__resultTypeTitle}>
        Shopping ads
      </h3>
      <div className={styles.visibilityResults__resultContainer}>
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
    </main>
  );
}
