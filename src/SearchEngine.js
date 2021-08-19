import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Result from "./Result.js";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelApiKey =
      "563492ad6f9170000100000107bb8c1c288948e3a86c8987a7160bdc";
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <section className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeyword}
              className="search"
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" value="Search" className="search" />
          </form>
        </section>
        <Result results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
