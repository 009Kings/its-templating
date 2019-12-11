// For all my personal routes
const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.render('personal/about', { name: 'BRITNAY' })
});

router.get('/blog', (req, res) => {
  let posts =  [
    { title: 'A', body: 'Before they sold out microdosing intelligentsia, flexitarian tattooed YOLO bushwick swag echo park. Hell of irony twee, cray next level salvia leggings mumblecore waistcoat woke pitchfork shabby chic ugh pabst. Typewriter lyft 90\'s, YOLO neutra shabby chic palo santo tumeric bitters green juice kitsch keytar. Portland waistcoat lyft brunch dreamcatcher fashion axe. Asymmetrical dreamcatcher shoreditch chillwave normcore af vegan venmo unicorn vice 3 wolf moon small batch hot chicken. Knausgaard tumeric roof party iceland hot chicken jianbing, cred succulents. Cronut everyday carry cornhole tacos.'},
    { title: 'B',  body: "Before they sold out microdosing intelligentsia, flexitarian tattooed YOLO bushwick swag echo park. Hell of irony twee, cray next level salvia leggings mumblecore waistcoat woke pitchfork shabby chic ugh pabst. Typewriter lyft 90's, YOLO neutra shabby chic palo santo tumeric bitters green juice kitsch keytar. Portland waistcoat lyft brunch dreamcatcher fashion axe. Asymmetrical dreamcatcher shoreditch chillwave normcore af vegan venmo unicorn vice 3 wolf moon small batch hot chicken. Knausgaard tumeric roof party iceland hot chicken jianbing, cred succulents. Cronut everyday carry cornhole tacos."},
    {title: 'C', body: 'Before they sold out microdosing intelligentsia, flexitarian tattooed YOLO bushwick swag echo park. Hell of irony twee, cray next level salvia leggings mumblecore waistcoat woke pitchfork shabby chic ugh pabst. Typewriter lyft 90\'s, YOLO neutra shabby chic palo santo tumeric bitters green juice kitsch keytar. Portland waistcoat lyft brunch dreamcatcher fashion axe. Asymmetrical dreamcatcher shoreditch chillwave normcore af vegan venmo unicorn vice 3 wolf moon small batch hot chicken. Knausgaard tumeric roof party iceland hot chicken jianbing, cred succulents. Cronut everyday carry cornhole tacos.'}
  ]
  res.render('personal/blog', { posts })
})

module.exports = router;