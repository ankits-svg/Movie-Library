import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AllRoutes from "./components/Allroutes";
import Navbar from "./components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const movieCache = useRef({});
  const navigate = useNavigate();


useEffect(() => {
  // If search bar is empty, clear previous results
  if (!searchQuery.trim()) {
    setMovies([]);
    setError("");
    setLoading(false);
    return;
  }

  const fetchMovies = async () => {
    if (movieCache.current[searchQuery]) {
      setMovies(movieCache.current[searchQuery]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=1c1fcf82&s=${searchQuery}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        movieCache.current[searchQuery] = data.Search;
      } else {
        setError(data.Error || "No results found");
        setMovies([]);
      }
    } catch {
      setError("Error fetching movies");
    } finally {
      setLoading(false);
    }
  };

  const debounce = setTimeout(fetchMovies, 600);
  return () => clearTimeout(debounce);
}, [searchQuery]);


  return (
    <div className="app-container">
      <Navbar />
      <h2
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", color: "#61dafb", textAlign: "center" }}
      >
        🎬 Movie Search App
      </h2>

      <AllRoutes
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        movies={movies}
        loading={loading}
        error={error}
        movieCache={movieCache.current}
      />
    </div>
  );
}

export default App;
