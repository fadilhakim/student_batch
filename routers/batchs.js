const express = require('express');
const route = express.Router();
const Model = require('../models')
const auth = require('../helpers/auth.js')

route.get('/',auth.checkLogged,function(req,res){
    Model.batch.findAll()
    .then(listBatch =>{
      res.render('batch',{listBatch:listBatch})
    }).catch(err=>{
        console.log(err)
    })
});

route.post('/add_batch',function(req,res){

    let batchObj = {
        batch_name : req.body.batch_name,
    }
    Batch.addBatch(batchObj,()=>{
        res.redirect('/batchs')
    })
});

module.exports = route;