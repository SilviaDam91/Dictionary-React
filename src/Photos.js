import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="container">
        <section className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.medium}
                      alt="{keyword}"
                      key={index}
                      className="img-fluid photoResult"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
