const mongoose = require("mongoose");

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

const skillSchema = new Schema({ //Minimum 3 Skills and Maximum 5 Skills
    skill1: {
        type: String,
        required: true,
    },
    skill2: {
        type: String,
        required: true,
    },
    skill3: {
        type: String,
        required: true,
    },
    skill4: {
        type: String
    },
    skill5: {
        type: String
    },
})

const freelancerSchema = new Schema({
    id: {
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
    bio:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    location:{
        type: locationSchema,
        required: true,
    },
    rank:{ //Rank should be called Levels
        type: Number,
        required: true,
        default: 0
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    skills:{
        type: skillSchema,
        required: true,
    },
    profilePic:{
        type: String,
        required: true,
    },
});

//Reviews, Order (active, completed and cancelled), Gigs will have a separate schema where each for a user is identified with their ID as foreign key - To keep things organized

const Freelancer = mongoose.model("Freelancer",freelancerSchema);

module.exports = Freelancer;