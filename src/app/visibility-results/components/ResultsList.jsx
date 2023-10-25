import Image from "next/image";

import styles from "./ResultsList.module.css";

export default function ResultsList() {
  return (
    <section className={styles.resultsList}>
      <h4>Image</h4>
      <h4>Product name</h4>
      <h4>URL</h4>
      <h4>Position</h4>
      <Image src="" alt="A PLA placeholder" />
      <p>Test product</p>
      <p>Product URL: www.product.com/product1</p>
      <p>Position ?</p>
    </section>
  );
}
