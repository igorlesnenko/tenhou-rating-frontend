var express = require('express');
var compression = require('compression');
var fallback = require('express-history-api-fallback');
var app = express();

app.set('x-powered-by', false);

app.use(compression());

var root = __dirname + '/build';

app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Production server started`);
});