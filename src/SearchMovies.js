import React, { useState } from 'react';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [clicked, setClicked] = useState(false);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=6be4d988dcd915e058b29a7547e2164b&language=en-US&query=${query}&page=1&include_adult=false`;

  React.useEffect(() => {
    if (clicked) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          console.log(query);
          setMovies(data.results);
          setClicked(false);
        });
    }
  }, [clicked]);

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label className="label" htmlFor="query"></label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="Search here"
        value={query}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
