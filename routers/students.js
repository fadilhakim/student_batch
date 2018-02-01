const express = require('express');
const route = express.Router();
const Models = require('../models')
const helperGrade = require('../helpers/checkingGrade')
const auth = require('../helpers/auth.js')

// ini contoh helper buat dulu manual di route nya langsung
// function scoreGrade(score){

//     if(score >= 80){
//         return "A"
//     }
//     else if(score >= 75 && score <= 79){
//         return "B"
//     }
//     else {
//         return "C"
//     }
// }

route.get('/',function(req,res){
    Models.Student.findAll()
        .then(listStudents =>{
            let gradeObj = []
            listStudents.forEach(Student => {
                //gradeObj.push({grade : scoreGrade(Student.score)})
                gradeObj.push({grade : helperGrade(Student.score)})
            });
            
            res.render('student',{listStudents:listStudents, Studentgrade : gradeObj})
        })

   
});

route.post('/add_student',function(req,res){
   
    Models.Student.create({
        name : req.body.name,
        age : req.body.age,
        email : req.body.email,
        score : req.body.score,
        password : req.body.password
    }).then(result=>{
        res.redirect('/students')
    }).catch(err=>{
        console.log(err)
    })

});

route.get('/delete/:id',function(req,res){
    Models.Student.destroy({where : {
        id : req.params.id
    }}).then(success =>{
            res.redirect('/students')
        })
        .catch(err => {
            console.log(err)
        })

});

module.exports = route;