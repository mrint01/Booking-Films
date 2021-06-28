const mongoose = require('mongoose');

const seanceSchema = new mongoose.Schema({
    date : {type : Date, default : Date.now()},
    time: String,
    nbr: Number
    
});

const Seance = mongoose.model('Seance',seanceSchema);

module.exports = Seance;