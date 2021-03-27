const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items')
const ExpressError = require('./expressError')



app.get('/dogs', function(request, response) {
  return response.send('Dogs go brk brk');
});

app.listen(3000, function(){
  console.log('App on port 3000');
}) 

//get the app working