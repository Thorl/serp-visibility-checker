import Image from "next/image";

import styles from "./TextResult.module.css";

interface TextResultProps {
  display_link?: string;
  title: string;
  link: string;
  rank: number;
}

export function TextResult(props: TextResultProps) {
  return (
    <>
      {props.display_link && (
        <Image
          width={100}
          height={100}
          src={props.display_link}
          alt="A text result placeholder"
        />
      )}
      {!props.display_link && <p>No image available</p>}
      <p>{props.title}</p>
      <a href={props.link} target="_blank">
        Go to the shop
      </a>
      <p>{props.rank}</p>
    </>
  );
}
