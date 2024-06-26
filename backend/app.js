const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).send('Welcome to Cinemate API');
});

// Get all movies
app.get('/api/movies', async (req, res) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

// Get a movie by id
app.get('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await prisma.movie.findUnique({
    where: { id: parseInt(id) },
  });
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
});

// Create a new movie
app.post('/api/movies', async (req, res) => {
  const { title, director, releaseYear, image } = req.body;
  const movie = await prisma.movie.create({
    data: { title, director, releaseYear, image },
  });
  res.status(201).json(movie);
});

// Update a movie by id
app.put('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { title, director, releaseYear, image } = req.body;
  try {
    const updatedMovie = await prisma.movie.update({
      where: { id: parseInt(id) },
      data: { title, director, releaseYear, image },
    });
    res.json(updatedMovie);
  } catch (error) {
    res.status(404).send('Movie not found');
  }
});

// Delete a movie by id
app.delete('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.movie.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).send('Movie not found');
  }
});

app.listen(80, () => {
  console.log('Server is running on http://localhost:80');
});
