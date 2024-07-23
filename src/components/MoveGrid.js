import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

function MoveGrid() {
  const [moves, setMoves] = useState([]);
  const [searchTeam, setSearchTeam] = useState("");

  const [genre, setGenre] = useState("All genre");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMoves(data))
      .then(() => console.log("hi")) // this is optional
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchTeam(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const matchesGerne = (moves, genre) => {
    return (
      genre === "All genre" || moves.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTearm = (moves, searchTeam) => {
    return moves.title.toLowerCase().includes(searchTeam.toLowerCase());
  };

  const matchesRating = (moves, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return moves.rating >= 8;
      case "Ok":
        return moves.rating >= 5 && moves.rating < 8;
      case "Bad":
        return moves.rating >= 5;

      default:
        return false;
    }
  };

  const filteredMovies = moves.filter((m) => {
    return (
      matchesGerne(m, genre) &&
      matchesRating(m, rating) &&
      matchesSearchTearm(m, searchTeam)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTeam}
        onChange={handleSearch}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantacy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((mo) => {
          return <MovieCard key={mo.id} m={mo} />;
        })}
      </div>
    </div>
  );
}

export default MoveGrid;
// replace moves to filteredMovies
