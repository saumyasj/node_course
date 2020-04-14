const express = require('express')

const app =express()
app.get('',(req,res)=>{
    res.send('Hello')
})

app.get('/help',(req,res)=>{
    res.send('Help page')
})
//app.com
//app.com/help
//app.com/about 

//start server
app.listen(3000,()=>{
    console.log('Server up on port 3000')
})//process does not stop and is up and running till u end it 

