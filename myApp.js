let express = require('express');
let app = express();


app.get('/',(req,res)=>{
  res.render('index.html')
})
console.log('Hello World');




 module.exports = app;
