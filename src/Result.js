import React from "react";
import Meaning from "./Meaning.js";
export default function Result(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <h4>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </h4>
      </div>
    );
  } else {
    return null;
  }
}
