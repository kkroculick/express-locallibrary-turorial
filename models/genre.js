var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({

    genre: {type:String},
    name:{type:String, required:true, min:3,man:100},

});

// Virtual for bookinstance's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema)
