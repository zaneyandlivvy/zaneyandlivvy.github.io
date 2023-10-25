import React from "react";
import "./MainSiteComponents.css";
import quotes from "./LivvysBestQuotes.json";

function LivvysBestQuotes () {
  return (
    <div>
      <h1 className="section-title">Livvy's Best Quotes</h1>
      <ul className="quote-list">
        {quotes.map((quote, index) => (
          <li key={index} className="quote-item">
            <div className="quote-text">{quote.text}</div>
            <div className="quote-date">{quote.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivvysBestQuotes;
