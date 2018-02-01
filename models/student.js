'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    score:DataTypes.INTEGER,
    password:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Student.beforeCreate((student)=>{
    const saltRounds = 10;
    const myPlaintextPassword = student.password;

    return bcrypt.hash(student.password, saltRounds)
    .then(hash=> {
      student.password = hash
    })
    .catch(err =>{
      console.log(err)
    })
   
  })
  return Student;
};