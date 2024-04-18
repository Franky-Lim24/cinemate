<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Movies List</h1>
      <button
        @click="openModal"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Movie
      </button>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img
          @click="openDetailsModal(movie)"
          class="w-full cursor-pointer"
          :src="movie.image"
          :alt="movie.title"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
          <p class="text-white-700 text-base">Director: {{ movie.director }}</p>
          <p class="text-white-600 text-sm">
            Release Year: {{ movie.releaseYear }}
          </p>
        </div>
      </div>
    </div>
    <AddMovieModal
      :isOpen="showAddModal"
      @close="showAddModal = false"
      @add-movie="addMovie"
    />
    <MovieDetailsModal
      :isOpen="showDetailsModal"
      :movie="selectedMovie"
      @close="showDetailsModal = false"
      @edit="editMovie"
      @delete="deleteMovie"
    />
  </div>
</template>

<script>
import AddMovieModal from './AddMovieModal.vue';
import MovieDetailsModal from './MovieDetailsModal.vue';
import {
  GetMovies as fetchMoviesFromDB,
  AddMovie as addMovieToDB,
  UpdateMovie as updatedMovieInDB,
  DeleteMovie as deleteMovieFromDB,
} from '../services/movies';

export default {
  components: {
    AddMovieModal,
    MovieDetailsModal,
  },
  data() {
    return {
      showAddModal: false,
      showDetailsModal: false,
      selectedMovie: null,
      movies: [
        {
          id: 1,
          title: 'Inception',
          director: 'Christopher Nolan',
          releaseYear: '2010',
          image:
            'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
        },
        {
          id: 2,
          title: 'Interstellar',
          director: 'Christopher Nolan',
          releaseYear: '2014',
          image:
            'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
          id: 3,
          title: 'The Matrix',
          director: 'Lana Wachowski, Lilly Wachowski',
          releaseYear: '1999',
          image:
            'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        },
        {
          id: 4,
          title: 'Pulp Fiction',
          director: 'Quentin Tarantino',
          releaseYear: '1994',
          image:
            'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        },
        {
          id: 5,
          title: 'The Godfather',
          director: 'Francis Ford Coppola',
          releaseYear: '1972',
          image:
            'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        },
        {
          id: 6,
          title: 'Fight Club',
          director: 'David Fincher',
          releaseYear: '1999',
          image:
            'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        },
        {
          id: 7,
          title: 'Forrest Gump',
          director: 'Robert Zemeckis',
          releaseYear: '1994',
          image:
            'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 8,
          title: 'The Dark Knight',
          director: 'Christopher Nolan',
          releaseYear: '2008',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.showAddModal = true;
    },
    addMovie(newMovie) {
      this.movies.push({
        ...newMovie,
        id: this.movies.length + 1,
      });
      addMovieToDB(newMovie);
      this.showModal = false;
    },
    openDetailsModal(movie) {
      this.selectedMovie = movie;
      this.showDetailsModal = true;
    },
    editMovie(updatedMovie) {
      const index = this.movies.findIndex(
        (movie) => movie.id === updatedMovie.id
      );
      if (index !== -1) {
        this.movies[index] = { ...updatedMovie }; // Direct assignment for reactivity in Vue 3
      }
      updatedMovieInDB(updatedMovie);
      this.showDetailsModal = false;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
      deleteMovieFromDB(id);
      this.showDetailsModal = false;
    },
  },
};
</script>
