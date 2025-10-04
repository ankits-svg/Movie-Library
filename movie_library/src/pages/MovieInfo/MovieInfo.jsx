import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ movieCache }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      if (movieCache[id]) {
        setMovie(movieCache[id]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=1c1fcf82&i=${id}`
        );
        const data = await res.json();
        if (data.Response === "True") {
          movieCache[id] = data;
          setMovie(data);
        } else {
          setError("Movie not found");
        }
      } catch {
        setError("Error fetching movie");
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id, movieCache]);

  if (loading) return <p className={styles.status}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{movie.Title}</h2>

      <div className={styles.content}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className={styles.poster}
        />

        <div className={styles.details}>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
