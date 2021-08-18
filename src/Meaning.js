import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      {" "}
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              {definition.definition}
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
