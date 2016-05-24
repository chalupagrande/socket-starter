'use strict';

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//FOR BLUEMIX
const port = process.env.VCAP_APP_PORT || 3000;
const host = process.env.VCAP_APP_PORT || 'localhost';

app.get('/', (req, res, next)=>{
  var b = req.body
  res.send("Hello World!")
})


app.listen(port)
console.log("running on port: " + port)