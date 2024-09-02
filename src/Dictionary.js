import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"; 
import Photos from "./Photos";
import "./Dictionary.css"

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword || "");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const apiKey = "4f0tbb34c0ea3deo2dcac0706f4ad715";

  const handleResponse = (response) => {
    setResults(response.data);
    setLoading(false);
  };

  const handleImageResponse = (response) => {
    setPhotos(response.data.photos);
    setLoading(false);
  };

  const handleError = (error) => {
    setError(error.message);
    setLoading(false);
  };

  const search = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
 
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse).catch(handleError);
  };

  let handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="hint">
          What word would you like to look up?
          <input
            type="search"
            onChange={handleKeywordChange}
            value={keyword}
            placeholder="Type a word"
          />
          <button type="submit" disabled={loading}>
            Search
          </button>
          <div>Suggested words: yoga, verbose, plant, book</div>
        </div>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
