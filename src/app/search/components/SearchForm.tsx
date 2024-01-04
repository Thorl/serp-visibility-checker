"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [countryInput, setCountryInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [storeNameInput, setStoreNameInput] = useState("");
  const [keywordOneInput, setKeywordOneInput] = useState("");
  /*   const [keywordTwoInput, setKeywordTwoInput] = useState("");
  const [keywordThreeInput, setKeywordThreeInput] = useState(""); */

  const router = useRouter();

  const handleSubmitSearch = (event: React.FormEvent) => {
    event.preventDefault();

    // Create function that switches the page to /visibility-results, but at first
    // only shows a loading icon. Meanwhile, the BrightData API should be called.
    // Once the API call is returned, the loading icon should stop showing, and
    // instead show the page with the returned data.

    // Possible solution: Pass data in search params of URL. See Trello notes.

    // After some consideration the best solution is probably to store the data
    // in a global state using useContext and then accessing it in /visibility-results

    router.push("/visibility-results");
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmitSearch}>
      <label htmlFor="country">Country</label>
      <select
        value={countryInput}
        onChange={(event) => setCountryInput(event.target.value)}
        name="country"
        id="country"
      >
        <option value="se">Sweden</option>
      </select>
      <label htmlFor="language">Language</label>
      <select
        value={languageInput}
        onChange={(event) => setLanguageInput(event.target.value)}
        name="language"
        id="language"
      >
        <option value="se">Swedish</option>
      </select>
      <label htmlFor="storeName">
        Your store name as it appears in Google ads
      </label>
      <input
        value={storeNameInput}
        onChange={(event) => setStoreNameInput(event.target.value)}
        name="storeName"
        type="text"
      />
      <label htmlFor="keyword1">Keyword</label>
      <input
        value={keywordOneInput}
        onChange={(event) => setKeywordOneInput(event.target.value)}
        name="keyword1"
        type="text"
      />
      {/*   <label htmlFor="">Keyword 2</label>
      <input
        value={keywordTwoInput}
        onChange={(event) => setKeywordTwoInput(event.target.value)}
        name="keyword2"
        type="text"
      />
      <label htmlFor="">Keyword 3</label>
      <input
        value={keywordThreeInput}
        onChange={(event) => setKeywordThreeInput(event.target.value)}
        name="keyword3"
        type="text"
      /> */}
      <Link href={"/visibility-results"}>
        <button className={styles.searchForm__button}>Check Visibility</button>
      </Link>
    </form>
  );
}
