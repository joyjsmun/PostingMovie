import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  console.log(movie);
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getAdd = (req, res) => {
  res.render("add", { pageTitle: "Add Movie" });
};

export const postAdd = (req, res) => {
  const {title} = req.body;
  const {synopsis} = req.body;
  const newGenres = req.body.genres;
  const genres = newGenres.split(",");
  console.log(genres,typeof genres);
  addMovie({ title, synopsis, genres });
  return res.redirect(`/`);
};
