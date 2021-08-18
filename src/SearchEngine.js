import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Result from "./Result.js";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="SearchEngine">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeyword}
            className="search"
          />
          <input type="submit" value="Search" className="search" />
        </form>
      </section>
      <Result results={result} />
    </div>
  );
}
