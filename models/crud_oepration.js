var mongoose = require('mongoose');

var Movie = require('./movie_schema');

// Get Movies
module.exports.getMovies = function(callback){
    Movie.find(callback).select({"title": 1, "release_date": 1, "movie_type": 1, "rating": 1, "image_url": 1});
}

// Get single Movie
module.exports.getMovieById = function(id, callback){
    Movie.findById(id,callback);
}

// Add Movie
module.exports.addMovie = function(movie,callback){
    Movie.create(movie,callback);
}

// Update Movie
module.exports.updateMovie = function(id, movie, callback){
    var query = {_id: id};
    var update = {
        title : movie.title,
        release_date : movie.release_date,
        description : movie.description,
        director : movie.director,
        writer : movie.writer,
        stars : movie.stars,
        movie_type : movie.movie_type,
        duration : movie.duration,
        rating : movie.rating,
        image_url : movie.image_url
    }
    Movie.findOneAndUpdate(query, update, callback);
}

// Delete Movie
module.exports.deleteMovie = function(id, callback){
    var query = {_id: id};
    Movie.remove(query,callback);
}