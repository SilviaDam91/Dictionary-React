import React from "react";
import "./App.css";

import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  return (
    <div>
      {" "}
      <h4 className="definition">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="description">
              Definition: {definition.definition}
              <br />
              <em className="example"> {definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
