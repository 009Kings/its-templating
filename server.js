const express = require('express');
const layouts = require('express-ejs-layouts');

const app = express();

/* ---------- CONFIG ----------*/
app.set('view engine', 'ejs');
app.use(layouts);
// app.use('/', express.static('static'));


/* ---------- ROUTES ----------*/
app.get('/', function(req, res) {
  res.render('home', { butts: null, foo: 9, importantThings: ['love', 'donuts', 'friendship', 'listening to teachers'] });
});

/* ----------- CONTROLLERS/ROUTES ----------*/
app.use('/', require('./routes/personal'));

/* ---------- HEY ----------*/
app.listen(3000, function(){
  console.log(`🎧 You're listening to the smooth sounds of port 3000 🎧`)
})