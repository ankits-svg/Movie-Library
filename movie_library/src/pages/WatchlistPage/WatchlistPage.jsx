import React, { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import MovieCard from "../../components/MovieCard";
import styles from "./WatchlistPage.module.css";

const WatchlistPage = () => {
  const { watchlist } = useContext(WatchlistContext);

  if (!watchlist.length)
    return <p className={styles.empty}>Your watchlist is empty.</p>;

  return (
    <div className={styles.grid}>
      {watchlist.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} showRemoveButton />
      ))}
    </div>
  );
};

export default WatchlistPage;
