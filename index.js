//baris pertama berfungsi untuk mengimport express pada file kita
const express = require('express');
//baris kedua ini memasukan variabel yang memanggil express itu kedalam variabel app (standard nya nama var nya app)
const app = express();
const bodyParser = require('body-parser')
const Models = require('./models')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', './views')
app.set('view engine', 'ejs')

//calling all routes
const student = require('./routers/students.js')
const Batchs = require('./routers/batchs.js')
const auth = require('./helpers/auth.js')


// var checkLogged = function(req,res,next){
//     if(req.body.email){
//         next()
//     }
//     else {
//         res.send('Please Login First')
//     }    
// }

// session & bcrypt
const session = require('express-session')
app.use(session({ secret: 'asdsadada' }))

const bcrypt = require('bcrypt');
  
//Routing
app.use('/students',auth.checkLogged, student);
app.use('/batchs',auth.checkLogged, Batchs);

app.get('/',auth.checkLogged,(req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
    
})

app.post('/login', (req, res) =>{
    console.log(req.body.password)
    console.log(req.body.email)
   Models.Student.findOne({
       where : {
           email : req.body.email
       }
   })
   .then((student) =>{
       if(student){
           bcrypt.compare(req.body.password,student.password).then((result)=>{
                if(result){
                    req.session.loggedIn = true
                    res.redirect('/')
                }else {
                    console.log('PASSWORD TIDAK MATCH!')
                    res.render('login')
                }
           }).catch((err)=>{
               console.log('password Salah disini')
               res.render('login')
           })
       }else {
            console.log('DATA TIDAK COCOK!')
            res.render('login')
       }
   })
   .catch((err)=>{
        console.log("EMAIL TIDAK DI TEMUKAN!")
        res.render('login')
   })
})

app.get('/registration', (req, res) => {
    res.render('registration')
})

app.listen(3000,()=>{console.log('app listening to from port 3000')});
