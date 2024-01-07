import { TextResult } from "../TextResult/TextResult";

import styles from "./TextResultsList.module.css";

const textResultMock = [
  {
    title: "Pellet Machine",
    link: "https://www.example.com",
    rank: 4,
  },
  {
    title: "Ozone Generator",
    display_link: "https://fakeimg.pl/200x200/",
    link: "https://www.example.com",
    rank: 3,
  },
];

export const TextResultsList = () => {
  return (
    <div className={styles.textResultsList}>
      <h4>Image</h4>
      <h4>Name</h4>
      <h4>URL</h4>
      <h4>Position</h4>
      {textResultMock.map((result) => {
        const id = crypto.randomUUID();
        return (
          <TextResult
            key={id}
            title={result.title}
            link={result.link}
            rank={result.rank}
            display_link={result.display_link}
          />
        );
      })}
    </div>
  );
};
