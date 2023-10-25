import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__header}>Hello!</h1>
      <p className={styles.main__copy}>
        This is an app for checking the visibility of your ads in Google.
      </p>
      <Link className={styles.main__link} href="/search">
        Get Started!
      </Link>
    </main>
  );
}
