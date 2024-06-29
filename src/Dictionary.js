import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
      console.log(response.data.meanings[0]);
    
    }

    function search(event) {
      event.preventDefault();

      //API doc https://www.shecodes.io/learn/apis/dictionary
      let apiKey = "4f0tbb34c0ea3deo2dcac0706f4ad715";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />   
        </form>
    </div>;
}