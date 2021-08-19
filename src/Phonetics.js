import React from "react";
import "./App.css";

export default function Phonetics(props) {
  return (
    <section className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        listen
      </a>

      {props.phonetic.text}
    </section>
  );
}
