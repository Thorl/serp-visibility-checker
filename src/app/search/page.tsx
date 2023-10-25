import Link from "next/link";

import SearchForm from "./components/SearchForm";

import styles from "./page.module.css";

export default function Search() {
  return (
    <main className={styles.search}>
      <h2 className={styles.search__header}>Search</h2>
      <Link className={styles.search__homeLink} href="/">
        Home
      </Link>
      <SearchForm />
    </main>
  );
}
