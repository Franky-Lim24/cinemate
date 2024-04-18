import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Function to get movies
function getMovies() {
  return api
    .get('/movies')
    .then((response) => response.data)
    .catch((error) => console.error('Error fetching movies:', error));
}

// Function to add a new movie
function addMovie(movieData) {
  return api
    .post('/movies', movieData)
    .then((response) => response.data)
    .catch((error) => console.error('Error adding movie:', error));
}

// Function to update a movie
function updateMovie(id, movieData) {
  return api
    .put(`/movies/${id}`, movieData)
    .then((response) => response.data)
    .catch((error) => console.error('Error updating movie:', error));
}

// Function to delete a movie
function deleteMovie(id) {
  return api
    .delete(`/movies/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error('Error deleting movie:', error));
}

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
