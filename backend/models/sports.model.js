const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const sportsSchema = new Schema({
    heading: { type: String},
    img: {data: Buffer, contentType: String},
    description: { type: String}
    
},);


const Sports = mongoose.model('Sports', sportsSchema);


module.exports = Sports;