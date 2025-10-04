import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage/SearchPage";
import MovieInfo from "../pages/MovieInfo/MovieInfo";
import WatchlistPage from "../pages/WatchlistPage/WatchlistPage";

const AllRoutes = ({
  searchQuery,
  setSearchQuery,
  movies,
  loading,
  error,
  movieCache,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SearchPage
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            movies={movies}
            loading={loading}
            error={error}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieInfo movieCache={movieCache} />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
    </Routes>
  );
};

export default AllRoutes;
