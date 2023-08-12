import React, { useState } from 'react';
import ResultCard from './ResultCard';
function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue.trim() !== "") {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=039bf75b643dde5dbb20469f22773c8c&query=${encodeURIComponent(inputValue)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setResults([]);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;














