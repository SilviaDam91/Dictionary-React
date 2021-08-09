import React, { useState } from "react";
import "./App.css";
import axios from "axios";
export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeyword}
          className="search"
        />
        <input type="submit" value="Search" className="search" />
      </form>
    </div>
  );
}
