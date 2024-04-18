<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-[#1d232a] p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 class="text-xl font-bold mb-4">Edit Movie Details</h2>
      <form @submit.prevent="submitEdit">
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="edit-title"
          >
            Title
          </label>
          <input
            v-model="editableMovie.title"
            type="text"
            id="edit-title"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="edit-director"
          >
            Director
          </label>
          <input
            v-model="editableMovie.director"
            type="text"
            id="edit-director"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="edit-releaseYear"
          >
            Release Year
          </label>
          <input
            v-model="editableMovie.releaseYear"
            type="number"
            id="edit-releaseYear"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="edit-imageUrl"
          >
            Image URL
          </label>
          <input
            v-model="editableMovie.image"
            type="text"
            id="edit-imageUrl"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
          <button
            @click="deleteMovie"
            type="button"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
          <button
            @click="closeModal"
            type="button"
            class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    movie: Object,
  },
  data() {
    return {
      editableMovie: this.movie ? { ...this.movie } : {},
    };
  },
  watch: {
    movie(newVal) {
      this.editableMovie = { ...newVal };
    },
  },
  methods: {
    submitEdit() {
      console.log(this.editableMovie);
      this.$emit('edit', this.editableMovie);
      this.closeModal();
    },
    deleteMovie() {
      if (this.editableMovie && this.editableMovie.id) {
        this.$emit('delete', this.editableMovie.id);
      }
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
