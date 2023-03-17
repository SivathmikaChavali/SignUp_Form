const express = require('express')
const bodyparser = require('body-parser')
const mongoose= require('mongoose')

const app = express()

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended : true}))

mongoose.connect('mongodb://127.0.0.1:27017/Mydb')

app.set('view engine','ejs')

var db = mongoose.connection

app.post('/signup',(req,res)=>
{
    var name = req.body.name
    var email = req.body.email
    var phno= req.body.phno
    var password= req.body.password

    var data ={
        "name" : name,
        "email" : email,
        "phno" : phno,
        "password" : password
    }
db.collection('users').insertOne(data,(err,collection)=>{
    if(err){
        return err
    }
    console.log(data)

return res.render('singup_success')

})




})


app.listen(5000,(req,res)=>
{
    console.log("server running")
})

app.get('/',(req,res)=>{
    res.render('index')
})

