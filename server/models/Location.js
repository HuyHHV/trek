const { Schema, model } = require('mongoose');

const locationSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "can't be blank"],
        },
        geolocation: [{type:Number}],
        
        src: {
            type: String,
            required: 'URL can\'t be empty',
            match: [ /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'is valid'],
            unique: true
        },
        street: {
            type: String,
            require: [true]
        },
        suburb: {
            type: String,
            require: [true]
        }
}
);

const Location = model('Location', locationSchema);

module.exports = Location;