import React, { useState, useEffect } from 'react';
import axios from 'axios';


const port = 3001;
const FormMovies = ({ movieId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    director: '',
    releaseDate: '',
  });

  useEffect(() => {
    if (movieId) {
      // Récupère le film
      axios.get(`http://localhost:${port}`)
        .then(response => setFormData(response.data))
        .catch(error => console.error('Error fetching movie details:', error));
    }
  }, [movieId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>{movieId ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>Director:
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
        </label>
        <label>Release Date:
          <input
            type="text"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{movieId ? 'Update' : 'Add'} Movie</button>
      </form>
    </div>
  );
};

export default FormMovies;
