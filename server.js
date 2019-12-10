const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('HIT THE HOME')
});

app.get('/about', (req, res) => {
  res.send("FEW OF ME GAV THINGS")
});

app.get('/blog', (req, res) => {
  
})

app.listen(3000, function(){
  console.log(`🎧 You're listening to the smooth sounds of port 3000 🎧`)
})