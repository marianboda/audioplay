'use strict'
var express = require('express')
var app = express()
var path = require('path')

app.use(require('serve-static')(path.join(__dirname, '..', 'app')))

app.get('/', (req, res) => {
  res.send('hello :)')
})

var server = app.listen(3000, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('LISTENING AT %s:%s', host, port)
})
