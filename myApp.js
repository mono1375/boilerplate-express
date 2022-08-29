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
    var response = {
      "message": "Hello json"
    };
    
    if(process.env.MESSAGE_STYLE==='uppercase'){
      //Override message attribute value based on condition
      response.message = response.message.toUpperCase();  
    }
    
    return res.json(response); 

})


console.log('Hello World');




 module.exports = app;
