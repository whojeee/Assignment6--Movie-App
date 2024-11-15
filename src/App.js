import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("marvel");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    try {
      const apiKey = "4ec58122"; 
      const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };
  

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div className="App">
      <Header title="Simple Movies List App" />
      <Search setQuery={setQuery} />
      <div className="movie-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default App;
