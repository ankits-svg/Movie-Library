import React, { useState, useEffect, useMemo } from "react";
import styles from "./SearchPage.module.css";
import MovieCard from "../../components/MovieCard";

const SearchPage = ({ searchQuery, setSearchQuery, movies, loading, error }) => {
  const [input, setInput] = useState(searchQuery);

  // Keep local input in sync with searchQuery prop
  useEffect(() => setInput(searchQuery), [searchQuery]);

  // Handle typing in input
  const handleChange = (e) => setInput(e.target.value);

  // Debounce input to reduce API calls
  useEffect(() => {
    const delay = setTimeout(() => setSearchQuery(input.trim()), 500);
    return () => clearTimeout(delay);
  }, [input, setSearchQuery]);

  // Remove duplicate movies by imdbID
  const uniqueMovies = useMemo(() => {
    if (!movies) return [];
    const seen = new Set();
    return movies.filter((movie) => {
      if (seen.has(movie.imdbID)) return false;
      seen.add(movie.imdbID);
      return true;
    });
  }, [movies]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={input}
        onChange={handleChange}
        className={styles.input}
      />

      {loading && <p className={styles.status}>Loading movies...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {uniqueMovies.length > 0 ? (
        <div className={styles.grid}>
          {uniqueMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        !loading && <p className={styles.status}>No movies found.</p>
      )}
    </div>
  );
};

export default SearchPage;
