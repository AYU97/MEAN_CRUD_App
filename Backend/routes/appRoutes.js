const express = require('express');
const router = express.Router();
const User = require('../models/dataSchema');


//Create
router.post('/',(req,res) => {
    var newUser = new User({
        name:req.body.name,
        email : req.body.email,
        position : req.body.position,
        city : req.body.city
        
    });
    newUser
        .save()
        .then( user => {
            res.status(200).json({msg:user});
        }).catch(err => {
            res.status(500).json({errmsg: err });
        })
});

//Read
router.get('/',(req,res) => {
    User.find({},(err,users) => {
        if(err){
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg: users });
    });
});

//Update
router.put('/',(req,res) => {

    User.findById(req.body._id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.position = req.body.position;
            user.city = req.body.city;
            user
                .save()
                .then(user => {
                    res.status(200).json({msg:user});
                }).catch(err => {
                    res.status(500).json({errmsg:err});
                })
        }).catch(err => {
            res.status(500).json({errmsg:err});
        })
});


//Delete
router.delete('/:id',(req,res) => {
    User.findOneAndRemove({_id:req.params.id})
        .then( user => {
            res.status(200).json({msg:user});
        }).catch(err => {
            res.status(500).json({errmsg:err});
        })
});

module.exports = router;