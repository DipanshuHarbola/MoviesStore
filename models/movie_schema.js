var mongoose = require('mongoose');

// Movie Schema
var movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    release_date:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    director:{
        type: String,
        required : true
    },
    writer:{
        type: String,
    },
    stars:{
        type: String,
        required : true
    },
    movie_type:{
        type: String,
        required : true
    },
    duration:{
        type: String
    },
    rating:{
        type: String
    },
    image_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Movie',movieSchema);

