const router = require('express').Router();
const {Film, validate_film} = require('../models/film');
const _ = require('lodash');
const Seance = require('../models/seance');




router.get('', async (req,res)=>{
    res.send(await Film.find());
})

router.get('/:id', async (req,res)=>{
    let film =await Film.findById(req.params.id)
                            .populate('seance.id');
    if(!film)
        return res.status(404).send('Id is not found')
    res.send(film);
});

router.post('',async (req,res)=>{
    let validation = validate_film(req.body);
    
    if(validation.error)
        return res.status(400).send(validation.error.details[0].message);
    let film = new Film(_.pick(req.body,'title','seance','actor'));
    try {
        film = await film.save();
    } catch (error) {
        res.status(400).send("Error in DB Store : "+error.message)
    }
    
    res.send(film);
})


router.delete('/:id', async (req,res)=>{
    let film =await Film.findById(req.params.id);
    if(!film)
        return res.status(404).send('Id is not found')
    await Film.deleteOne({_id:req.params.id})
    res.send(film);
});



module.exports = router