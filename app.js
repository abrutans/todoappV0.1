const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')

app.use(express.static(__dirname + 'views'))


items = ["item 1", "item2", "item3"]
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));




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
  items.push(item)
  res.redirect('/');
});

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`)

});
