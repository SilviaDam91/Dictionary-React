import React from "react";
import "./App.css";

export default function Phonetics(props) {
  return (
    <section className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <button className="listenButton">Listen </button>
      </a>

      <span className="pronunciation"> {props.phonetic.text} </span>
    </section>
  );
}
