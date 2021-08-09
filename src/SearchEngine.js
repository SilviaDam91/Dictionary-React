import React, { useState } from "react";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
        <input type="submit" value="Search" />
      </form>
      <h3>{`Searching for ${keyword}`}</h3>
    </div>
  );
}
