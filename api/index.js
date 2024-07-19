const express = require('express')
const app = express()

app.get(('*'),(request, response) => {
    response.send({message:'hola mundo'})
    console.log('mi primera aplicación serverless')
})

// module.exports = (req, res) => {
//     res.status(200).json({ message: "Hello, world!" });
//   };

module.exports = app