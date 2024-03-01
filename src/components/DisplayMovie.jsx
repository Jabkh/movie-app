import React, { useState, useEffect } from 'react';
import axios from 'axios';

const port = 3001;

const DisplayMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch movies à partir de l'API
    axios.get(`http://localhost:${port}/movies`)
      .then(response => setMovies(response.data.movies))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleSearch = () => {
    // filter pour rechercher
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleDelete = (movieId) => {
    // requete delete pour la suppression
    axios.delete(`http://localhost:${port}/movies/${movieId}`)
      .then(response => {
        // Si réussi met à jour avec l'élément supprimé
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  const handleEdit = (movieId) => {
    // utilisation de la requête put pour update
  };

  return (
    <div>
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            {/* <button onClick={() => handleEdit(movie.id)}>Edit</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMovies;
