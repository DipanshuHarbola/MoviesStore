var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

var port = 3001;

Movie = require('./models/crud_oepration');

// Connect to mongoose
mongoose.connect('mongodb://localhost/mymoviesstore');
var db = mongoose.connection;
db.once('open',function(){
    console.log("Connected to database");
});
db.on('error',console.error.bind(console,'connection error'))

app.get('/',function(req, res){
    res.send('Welcome To My Movies Store..!');
});

// Get all the movies
app.get('/api/movies',function(req, res){
    console.log("call to get movies");
    Movie.getMovies(function(err, movies){
        if(err){
            throw err;
        }
        res.json(movies);
    });
});

// Get a single movie
app.get('/api/movies/:_id',function(req, res){
    console.log("call to get a movie");
    Movie.getMovieById(req.params._id,function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

// Add a movie
app.post('/api/movies',function(req, res){
    console.log("call to add a movie");
    var movie = req.body;
    Movie.addMovie(movie, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

// Update movie
app.put('/api/movies/:_id',function(req, res){
    console.log("call to update a movie");
    var id = req.params._id;
    var movie = req.body;
    Movie.updateMovie(id, movie, {}, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

// Delete movie
app.delete('/api/movies/:_id',function(req, res){
    console.log("call to delete a movie");
    var id = req.params._id;
    Movie.deleteMovie(id, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

app.listen(port);
console.log('Listening on port number '+port);