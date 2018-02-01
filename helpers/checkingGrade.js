module.exports = function(score){
    if(score >= 80){
        return "A"
    }
    else if(score >= 75 && score <= 79){
        return "B"
    }
    else {
        return "C"
    }
}