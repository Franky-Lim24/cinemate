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
    <ToastNotification ref="toastComponent" />
  </div>
</template>

<script>
import AddMovieModal from './AddMovieModal.vue';
import MovieDetailsModal from './MovieDetailsModal.vue';
import ToastNotification from './ToastNotification.vue';

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
    ToastNotification,
  },
  data() {
    return {
      showAddModal: false,
      showDetailsModal: false,
      selectedMovie: null,
      movies: [],
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      this.movies = await fetchMoviesFromDB();
    },
    openModal() {
      this.showAddModal = true;
    },
    addMovie(newMovie) {
      this.movies.push({
        ...newMovie,
        id: this.movies.length + 1,
      });
      addMovieToDB(newMovie);
      this.triggerToast('Movie added successfully!');
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
      updatedMovieInDB(updatedMovie.id, updatedMovie);
      this.triggerToast('Movie updated successfully!');
      this.showDetailsModal = false;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
      deleteMovieFromDB(id);
      this.triggerToast('Movie deleted successfully!');
      this.showDetailsModal = false;
    },
    triggerToast(message) {
      this.$refs.toastComponent.showToast(message);
    },
  },
};
</script>
