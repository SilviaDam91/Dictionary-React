import React from "react";
import "./App.css";

import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Result(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section className="Results">
          <h2 className="word">{props.results.word}</h2>
          <h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </h2>

          <h4>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </h4>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
