const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceImages = new Schema({
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    image3: {
        type: String,
        required: true
    },
    image4: {
        type: String,
    },
    image5: {
        type: String,
    },
})

const ServiceSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    freelancerId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
})

//Category attribute made but category schema should be separate for ease of finding gigs under one category
//That category schema should be imported here

//Explain Attributes of service schema more - ambigous attributes
