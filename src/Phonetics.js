import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            /{props.phonetic}/
        </div>
    );
}