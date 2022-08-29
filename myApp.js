let express = require('express');
let app = express();

app.use(express.static(__dirname+ '/public'))
app.use('/public',express.static(__dirname+ '/public'))


app
  .get('/',(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
  .get('/json',(req,res)=>{
  res.json({"message": "Hello json"})
})
console.log('Hello World');




 module.exports = app;
