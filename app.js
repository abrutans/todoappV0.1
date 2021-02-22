const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')

app.use(express.static(__dirname + '/public'))

items = []
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: create a method to remove a item once cbox is triggered.

app.get("/", function (req, res) {
  let today = new Date()
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  day = today.toLocaleDateString("en-US", options)
  


  res.render("list", { day: day, newListItems: items });
});



app.post("/", function (req, res) {
  let item = req.body.newItem
  let checkbox = req.body.cbox 

  items.push(item)
  
  
  res.redirect('/');
});

app.listen(3330, function () {
  console.log(`Example app listening at http://localhost:3330`)

});
