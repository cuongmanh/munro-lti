const http = require('http')
const express = require('express')
const lti  = require('ims-lti')
const bodyParser = require('body-parser')

var ltiKey = "myLTIkey"
var ltiSecret = "myLTIsecret"

var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('json spaces', 4)

app.post('/lti', (req, res, next) => {
    res.json(req.body)
})

var server = http.createServer(app).listen(process.env.PORT || 5000, () => {
    console.log("Server started")
})