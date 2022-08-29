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
  if(process.env.MESSAGE_STYLE ==='uppercase'){
     return  response = "Hello World".toUpperCase()
    }else{
      response = "Hello World"
    }
  res.json({"message": response})
})
console.log('Hello World');




 module.exports = app;
