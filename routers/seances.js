const router = require('express').Router();
const _ = require('lodash');
const Seance = require('../models/seance');

router.get('',async (req,res) => {
    res.send(await Seance.find());
});

router.post('',async (req,res) => {
    let seance = new Seance(_.pick(req.body,'date','time','nbr'));
    try {
        seance = await seance.save();
    } catch (error) {
        res.status(400).send("Save"+ error.message)
    }
    
    res.send(seance);
});

router.post('/reservation/:id/:nbr',async (req,res)=>{
    
     let oldseance = await Seance.findById(req.params.id);
    if(!oldseance)
        return res.status(400).send("Seance with this id not found");
     let newseance=oldseance ;

    if(req.params.nbr <= oldseance.nbr)
    {
       newseance.nbr=oldseance.nbr-req.params.nbr;
    }
    
    seance = _.merge(oldseance,newseance);
    seance = await seance.save();
    res.send(seance);
})

module.exports = router;