const mongoose = require('mongoose');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const filmSchema = new mongoose.Schema({
    title : {type:String, required : true},
    seance:[{id: {type :mongoose.Schema.Types.ObjectId, ref :'Seance'}, nbr : Number}],
    actor : [String]
   
});

const film_validation_schema = {
    title : Joi.string().min(5).required(),
    seance :  Joi.array().items({id :Joi.objectId(), nbr : Joi.number().max(100)}),
    actor : Joi.array().items(Joi.string().min(2)),
    
}

function validate_film(body){
    return Joi.validate(body,film_validation_schema);
}


const Film = mongoose.model('Film',filmSchema);

module.exports.Film = Film;
module.exports.validate_film = validate_film;
