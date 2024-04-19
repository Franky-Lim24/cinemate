const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const movies = [
    {
      id: 1,
      title: 'Pirates of the Caribbean',
      director: 'Espen Sandberg',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg',
      releaseYear: 2003,
    },
    {
      id: 2,
      title: 'Inception 2231',
      director: 'Christopher Nolan',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
      releaseYear: 2010,
    },
    {
      id: 3,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      releaseYear: 2014,
    },
    {
      id: 4,
      title: 'The Matrix',
      director: 'Lana Wachowski, Lilly Wachowski',
      image:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      releaseYear: 1999,
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      image:
        'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      releaseYear: 1994,
    },
    {
      id: 6,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      image:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      releaseYear: 1972,
    },
    {
      id: 7,
      title: 'Fight Club',
      director: 'David Fincher',
      image:
        'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      releaseYear: 1999,
    },
    {
      id: 8,
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
      releaseYear: 1994,
    },
    {
      id: 9,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      releaseYear: 2008,
    },
  ];

  for (let movie of movies) {
    try {
      await prisma.movie.create({ data: movie });
    } catch (e) {
      console.log(e);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
