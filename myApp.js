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
    let msg ={
      "message": "Hello json"
    }
    (process.env.MESSAGE_STYLE==='uppercase')?msg.message =msg.message.toUpperCase():res.json(msg);  

})


console.log('Hello World');




 module.exports = app;
