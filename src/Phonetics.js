import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        {" "}
        listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
