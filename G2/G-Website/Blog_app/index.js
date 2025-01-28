//Packages
const express = require('express')
const path = require('path')
const app = new express()
app.use(express.static('public'))

//Server and port
app.listen(4000, ()=> {
    console.log('App is listening at port 4000')
})

//Routes

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views/index.html'))
})

app.get('/about', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views/about.html'))
})

app.get('/contact', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views/contact.html'))
})

app.get('/post', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views/post.html'))
})
