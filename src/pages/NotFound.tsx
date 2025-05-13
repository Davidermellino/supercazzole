import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <span>hai la</span><h1>104</h1>
        <h2>Pagina Non Trovata</h2>
        <p>Ci dispiace, la pagina che stai cercando non esiste.</p>
        <Link to="/" className="home-button">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;