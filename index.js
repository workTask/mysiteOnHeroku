//import express 
const  express = require('express')
const app = express()

const port= process.env.PORT || 3008

//get pages listing
app.get ('/', (req, res) => {
    res.end('<div><nav><ul><li><a href="/">Home</a></li><li><a href="/register">Register</a></li></ul></nav><h1>Home page</h1></div>')
})

app.get ('/register', (req, res) => {
    res.end('<div><nav><ul><li><a href="/">Home</a></li><li><a href="/register">Register</a></li></ul></nav><h1>Register page</h1></div>')
})
app.listen(port, ( )=> {
    console.log('Server started ${port}')
})
