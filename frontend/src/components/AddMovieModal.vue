<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
  >
    <div class="bg-[#1d232a] p-4 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-lg font-bold mb-2">Add New Movie</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="title"
          >
            Title
          </label>
          <input
            v-model="newMovie.title"
            type="text"
            id="title"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="director"
          >
            Director
          </label>
          <input
            v-model="newMovie.director"
            type="text"
            id="director"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="releaseYear"
          >
            Release Year
          </label>
          <input
            v-model="newMovie.releaseYear"
            type="number"
            id="releaseYear"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="imageUrl"
          >
            Image URL
          </label>
          <input
            v-model="newMovie.image"
            type="text"
            id="imageUrl"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Movie
        </button>
        <button
          @click="closeModal"
          type="button"
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      newMovie: {
        title: '',
        director: '',
        releaseYear: null,
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-movie', this.newMovie);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
