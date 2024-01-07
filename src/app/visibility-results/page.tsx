import Link from "next/link";

import { ShoppingResultsList } from "./components/Shopping/ShoppingResultsList/ShoppingResultsList";
import { TextResultsList } from "./components/Text/TextResultsList/TextResultsList";

import styles from "./page.module.css";

export default function VisibilityResults() {
  return (
    <main className={styles.visibilityResults}>
      <Link href="/search">Home</Link>
      <h2>Showing visibility for keyword:</h2>
      <h3>Gabagool</h3>
      <h3 className={styles.visibilityResults__title}>Shopping Results</h3>
      <ShoppingResultsList />
      <h3 className={styles.visibilityResults__title}>Text Results</h3>
      <TextResultsList />
    </main>
  );
}
