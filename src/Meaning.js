import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning || {}; // Fallback to an empty object if meaning is undefined

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech || "Part of Speech Not Available"}</h3>

      <div>
        <p>
          <strong>Definition: </strong>
          {meaning.definition || "Definition Not Available"}{" "}
          {/* Added check for definition */}
          <br />
          <strong>Example: </strong>
          <em>{meaning.example || "Example Not Available"}</em>{" "}
          {/* Added check for example */}
          <br />
          <Synonyms synonyms={meaning.synonyms} />{" "}
          {/* Pass down synonyms properly */}
        </p>
      </div>
    </div>
  );
}
