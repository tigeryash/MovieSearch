import React from 'react';

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlfor="query"></label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="Search here"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
