// Iteration #1

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  // unless you are defining more than the "type" property, you don't have to use {} e.g.:
  // firstName: {type: String, require: true}
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

module.exports = model('Movie', movieSchema);


