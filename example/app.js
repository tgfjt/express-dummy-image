const express = require('express')
const morgan = require('morgan')
const dummyImage = require('../node/')

const app = express()

app.use(morgan('combined'))
app.use('/images', dummyImage())

app.listen(3000, function() {
  console.log('listen port 3000')
})
