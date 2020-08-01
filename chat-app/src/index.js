const path=require('path')
const http=require('http')
const express=require('express')
const socketio=require('socket.io')

const app=express()
const server=http.createServer(app)
const io=socketio(server)

const port =process.env.PORT||3000 
const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

//server(emit)---- client receives---count updated
//client(emit)---- server receives ---- increment 

io.on('connection',(socket)=>{
    console.log('New websocket connection')
    socket.emit('message','Welcome!')
    socket.broadcast.emit('message','A new user has joined')

    socket.on('sendMessage',(message)=>{
        io.emit('message',message) 
    })

    socket.on('sendLocation',(coords)=>{
        io.emit('message',`Location: ${coords.latitude},${coords.longitude}`)
    })

    socket.on('disconnect',()=>{
        io.emit('message','A user has left')
    })

})

server.listen(port,()=>{
    console.log(`Server on port ${port}`)

})



















































//web sockets allow full duplex communication (server<->client)
//in http the client only had to initiate request
//web socket protocol is separate from http 
//web socket has persistent connection 


