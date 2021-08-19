import React from "react";
import "./App.css";

export default function Phonetics(props) {
  console.log(props);
  return (
    <section className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        listen
      </a>
      <br />
      {props.phonetic.text}
    </section>
  );
}
