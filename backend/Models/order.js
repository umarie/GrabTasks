const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    serviceid:{
        type: String,
        required: true,
    },
    timeRemaining:{
        type: Number,
        required: true,
    },
    clientid:{
        type: String,
        required: true,
    },
    timeAssigned: {
        type: Date,
        required: true,
    }
})

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;