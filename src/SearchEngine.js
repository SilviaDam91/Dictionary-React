import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Result from "./Result.js";
import Photos from "./Photos.js";
export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handlePexelResponse(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelApiKey =
      "563492ad6f9170000100000107bb8c1c288948e3a86c8987a7160bdc";
    let pexelApitUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

    let headers = { Authorization: `Bearer ${pexelApiKey}` };

    axios
      .get(pexelApitUrl, {
        headers: headers,
      })
      .then(handlePexelResponse);
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
        <Photos photos={photo} />
        <Result results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
