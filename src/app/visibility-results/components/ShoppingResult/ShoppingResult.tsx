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
    <>
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
    </>
  );
}
