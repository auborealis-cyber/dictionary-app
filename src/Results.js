import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
    console.log(props.results);
    if (props.results && props.results.meanings && props.results.phonetic) {
        return (
            <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                          <div>
                            <Phonetics phonetic={props.results.phonetic} />
                          </div>
                </section>
            {props.results.meanings.map((meaning, index) => (
              <div key={index}>
                <section>
                  <Meaning meaning={meaning} />
                </section>
              </div>
            ))}
          </div>
        );
    } else {
        console.log("API response is missing 'meanings' property");
        return null;
    }
}