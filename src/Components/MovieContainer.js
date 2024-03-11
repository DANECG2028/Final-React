// MovieContainer.js
import React, { useState } from "react";

import styles from "./MovieContainer.module.css";

const MovieContainer = ({ movies }) => {
  // Define the state for liked movies
  const [likedMovies, setLikedMovies] = useState([]);

  // Event handler for liking a movie
  const handleLike = (id) => {
    if (!likedMovies.includes(id)) {
      setLikedMovies([...likedMovies, id]);
    }
  };

  // Event handler for disliking a movie
  const handleDislike = (id) => {
    setLikedMovies(likedMovies.filter(movieId => movieId !== id));
  };

  // Check if a movie is liked
  const isLiked = (id) => likedMovies.includes(id);

  return (
    <div className={styles.MovieContainer}>
      <h2>Media List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.releaseYear})
            <br />
            Genre: {movie.genre}
            <br />
            Director: {movie.director}
            <br />
            Rating: {movie.rating}
            <br />
            <button onClick={() => handleLike(movie.id)} disabled={isLiked(movie.id)}>
              Like
            </button>
            <button onClick={() => handleDislike(movie.id)} disabled={!isLiked(movie.id)}>
              Dislike
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieContainer;