import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <ul>
          {props.synonyms.map((synonym, index) => (
            <li key={index}>{synonym.trim()}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <p><strong>Synonyms: </strong><em>None available</em></p>
    );
  }
}
