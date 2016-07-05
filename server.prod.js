var express = require('express');
var compression = require('compression');
var app = express();

app.set('x-powered-by', false);

app.use(compression());

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Production server started`);
});