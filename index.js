//npm i dotenv
require('dotenv').config();
const { json } = require('express');
const express = require('express');
const userRouters = require('./routes/userRouters')
const app = express()
require('./models/config');
const bodyParser = require('body-parser')
app.use(express.json());
app.use('/',userRouters);

console.log('**',process.env.port)

const server = app.listen(process.env.port,(req,res)=>{
    console.log(`Server is running on port no : ${process.env.port}`)
})

module.exports = server