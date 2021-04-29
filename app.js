const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
// libraries 


// Modules

const date = require(__dirname+'/date.js')


app.use(express.static(__dirname + '/public'))


workItems = []
items = []
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: create a method to remove a item once cbox is triggered.

app.get("/", function (req, res) {
  

  let day = date();

  res.render("list", { listTitle: day, newListItems: items });
});



app.post("/", function (req, res) {
  let item = req.body.newItem
  

  if (req.body.list === "Work Todos") {
    workItems.push(item)
    res.redirect('/work');
  } else {
    items.push(item)
  
    res.redirect('/');
  }
});


app.get("/work", function (req, res) {
  res.render('list', { listTitle: "Work Todos", newListItems: workItems });

})

app.post('/work', (req, res) => {
  let item = req.body.newListItems
  workItems.push(item)
  res.redirect('/work');
});


app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(3330, function () {
  console.log(`Example app listening at http://localhost:3330`)

});

