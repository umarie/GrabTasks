const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    }
});

const ClientSchema = new Schema({

    id:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    location:{
        type: locationSchema,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
});

//Favourites, Orders (Active and History) will have separate schemas

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;