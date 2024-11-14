import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, searchHistory }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  const handleHistoryClick = (historyItem) => {
    onSearch(historyItem);
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {searchHistory.length > 0 && (
        <div className="search-history">
          <h3>Previously searched:</h3>
          <div className="history-items">
            {searchHistory.map((item, index) => (
              <button
                key={index}
                className="history-item"
                onClick={() => handleHistoryClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;