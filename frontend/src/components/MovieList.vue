<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Movies List</h1>
      <button
        @click="addMovie"
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
        <img class="w-full" :src="movie.image" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
          <p class="text-white-700 text-base">Director: {{ movie.director }}</p>
          <p class="text-white-600 text-sm">
            Release Year: {{ movie.releaseYear }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    addMovie() {
      console.log('Add movie button clicked');
    },
  },
};
</script>
