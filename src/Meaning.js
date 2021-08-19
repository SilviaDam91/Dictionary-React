import React from "react";
import "./App.css";

import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      {" "}
      <h4 className="definition">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6 className="description">
              Definition: {definition.definition}
              <br />
              <em> {definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </h6>
          </div>
        );
      })}
    </div>
  );
}
