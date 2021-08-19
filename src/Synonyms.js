import React from "react";
import "./App.css";

export default function Synonyms(props) {
  console.log(props.synonyms);

  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        {" "}
        Synonyms:
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
