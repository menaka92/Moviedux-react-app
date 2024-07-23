import React from "react";
import "../styles.css";

function MovieCard({ m }) {
  // error handling
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };
  const getRatingClass = (r) => {
    if (r >= 8) return "rating-good";
    if (r >= 5 && r < 8) return "rating-ok";

    return "rating-bad";
  };
  return (
    <div key={m.di} className="movie-card">
      <img src={`images/${m.image}`} alt={m.title} onError={handleError} />
      <h3 className="movie-card-title">{m.title}</h3>
      <p className="movie-card-genre">{m.genre}</p>
      <p className={`movie-card-rating , ${getRatingClass(m.rating)}`}>
        {m.rating}
      </p>
    </div>
  );
}

export default MovieCard;

//onError is event handler
