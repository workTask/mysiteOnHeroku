//import express 
var  express = require('express')
var app = express()

var PORT= process.env.PORT || 80

//get pages listing
app.get ('/', (req,res)=>{
    res.end('<div><nav><ul><li><a href="/">Home</a></li><li><a href="/register">Register</a></li></ul></nav><h1>Home page</h1></div>')
})

app.get ('/register', (req,res)=>{
    res.end('<div><nav><ul><li><a href="/">Home</a></li><li><a href="/register">Register</a></li></ul></nav><h1>Register page</h1></div>')
})



app.listen(PORT, ()=>{
    console.log('Server started')
})
