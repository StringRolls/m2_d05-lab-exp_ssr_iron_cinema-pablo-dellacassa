const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

// require the Drone model here

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((err) =>
      console.log(`Error while getting the specific movie from the  DB: ${err}`)
    );
});

router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) =>
    res.render("movies/movie-selected", movie)
  )
  .catch((err) => console.log(err));
});

module.exports = router;
