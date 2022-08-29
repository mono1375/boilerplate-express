let express = require('express');
let app = express();
require('dotenv').config()

app.use(express.static(__dirname+ '/public'))
app.use('/public',express.static(__dirname+ '/public'))

let response = "Hello World".toUpperCase()
if(process.env.MESSAGE_STYLE ==='allCaps'){
  response = "Hello World".toUpperCase()
}else{
  response = "Hello World"
}

app
  .get('/',(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
  .get('/json',(req,res)=>{
  res.json({"message": response})
})
console.log('Hello World');




 module.exports = app;
