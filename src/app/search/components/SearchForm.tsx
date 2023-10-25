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

      <button className={styles.searchForm__button}>Check Visibility</button>
    </form>
  );
}
