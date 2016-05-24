'use strict';

const express = require('express')
const app = express();
const server = require('http').Server(app)
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(server);
app.use(express.static('client'))

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//FOR BLUEMIX
const port = process.env.VCAP_APP_PORT || 3000;
const host = process.env.VCAP_APP_PORT || 'localhost';

io.emit('greeting', {for: 'everyone'});
io.on('connection', (socket)=>{
  console.log('a user connected')

  socket.on('disconnect', ()=>{
    console.log('a user disconnected')
  })

  socket.on("greeting", (msg)=>{
    console.log(msg)
    io.emit("greeting", "Your message: " + msg)
  })
})

app.get('/api/', (req, res, next)=>{
  var b = req.body
  res.send('buttplug')
})



server.listen(port)
console.log("running on port: " + port)