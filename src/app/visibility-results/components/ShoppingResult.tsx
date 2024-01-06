import Image from "next/image";

import styles from "./ShoppingResult.module.css";

interface ShoppingResultProps {
  image_url: string;
  title: string;
  shop_link: string;
  rank: number;
}

export default function ShoppingResult(props: ShoppingResultProps) {
  return (
    <section className={styles.result}>
      <h4>Image</h4>
      <h4>Product name</h4>
      <h4>URL</h4>
      <h4>Position</h4>
      <Image
        width={100}
        height={100}
        src={props.image_url}
        alt="A PLA placeholder"
      />
      <p>{props.title}</p>
      <a href={props.shop_link} target="_blank">
        Go to the shop
      </a>
      <p>{props.rank}</p>
    </section>
  );
}
