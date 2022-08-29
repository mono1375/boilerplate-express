let express = require('express');
let app = express();
require('dotenv').config()

app.use(express.static(__dirname+ '/public'))
app.use('/public',express.static(__dirname+ '/public'))




app
  .get('/',(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
  .get('/json',(req,res)=>{
  
  let response ='Hello World'
  (process.env.MESSAGE_STYLE==='uppercase')? response = response.toUpperCase():response = response;res.json({'message': response})
})
console.log('Hello World');




 module.exports = app;
