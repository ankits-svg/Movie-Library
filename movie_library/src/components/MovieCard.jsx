import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { WatchlistContext } from "../context/WatchlistContext";

const MovieCard = ({ movie, showRemoveButton = false }) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useContext(WatchlistContext);

  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);

  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.imdbID}`} className={styles.link}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={movie.Title}
          className={styles.poster}
        />
        <h3 className={styles.title}>{movie.Title}</h3>
        <p className={styles.year}>({movie.Year})</p>
      </Link>

      {!showRemoveButton ? (
        <button
          className={isInWatchlist ? styles.buttonAdded : styles.button}
          onClick={() => addToWatchlist(movie)}
          disabled={isInWatchlist}
        >
          {isInWatchlist ? "✔ Added" : "+ Watchlist"}
        </button>
      ) : (
        <button
          className={styles.buttonRemove}
          onClick={() => removeFromWatchlist(movie.imdbID)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default MovieCard;
