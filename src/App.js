import React from 'react';
import SearchMovies from './SearchMovies';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
    </div>
  );
}
