let express = require('express');
require('dotenv').config()
let app = express();

app.use(express.static(__dirname+ '/public'))
app.use('/public',express.static(__dirname+ '/public'))


app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
app
  .get('/',(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
  .get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==='uppercase'){
      res.json({
      "message": "HELLO JSON"
    })
    } else {
        res.json({
      "message": "Hello json"
    })
      };

})
  .get('/:word/echo',(req,res)=>{
    let {word}=req.params
    res.json({
      echo:word
    })
  })
app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // OR you can destructure and rename the keys
    var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });
const middleware = (req,res,next)=>{
  req.time =  new Date().toString()
  next()
}
app.get('/now',middleware,(req,res)=>{
  res.send({
    time: req.time
  })
})



console.log(process.env.MESSAGE_STYLE);




 module.exports = app;
