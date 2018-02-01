var checkLogged = function(req,res,next){
    //manipulasi req di middle ware

    if(req.session.loggedIn){
        return next()
    }
    else {
        res.render('login')
    }   
}

module.exports = {checkLogged : checkLogged}