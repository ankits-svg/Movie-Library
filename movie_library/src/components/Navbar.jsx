import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>🎬 Movie Library</h1>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Watchlist
          {watchlist.length > 0 && (
            <span className={styles.badge}>{watchlist.length}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
