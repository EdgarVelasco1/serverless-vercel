const express = require('express')
const app = express()

app.get(('*'),(request, response) => {
    console.log('mi primera aplicación serverless')
    response.send({message:'hola mundo'})
})

module.exports = app