const { Schema, model } = require('mongoose');

const locationSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "can't be blank"],
        },
        geolocation: [{type:Number}],
        
        URL: {
            type: String,
            required: 'URL can\'t be empty',
            match: [ /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/, 'is valid'],
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