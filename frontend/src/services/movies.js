import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://backend.cinemate.local:80',
});

// Function to get movies
export function GetMovies() {
  return api
    .get('/movies')
    .then((response) => response.data)
    .catch((error) => console.error('Error fetching movies:', error));
}

// Function to add a new movie
export function AddMovie(movieData) {
  return api
    .post('/movies', movieData)
    .then((response) => response.data)
    .catch((error) => console.error('Error adding movie:', error));
}

// Function to update a movie
export function UpdateMovie(id, movieData) {
  return api
    .put(`/movies/${id}`, movieData)
    .then((response) => response.data)
    .catch((error) => console.error('Error updating movie:', error));
}

// Function to delete a movie
export function DeleteMovie(id) {
  return api
    .delete(`/movies/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error('Error deleting movie:', error));
}
