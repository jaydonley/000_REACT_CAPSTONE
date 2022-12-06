const mongoose = require("mongoose");
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    subject: {
        type: String,
        required: [false]
    },
    ticketBody: {
        type: String,
        required: [true, "How can we help you move forward?"]
    }
})

const UserModel = mongoose.model("ticket", UserSchema)
module.exports = UserModel