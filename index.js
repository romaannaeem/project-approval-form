const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/form');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://romaan:admin123@ds227119.mlab.com:27119/spark-approval-form'
);

const app = express();

app.use(bodyParser.json());

require('./routes/appRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  /* Express will serve up production assets
    like our main.js file, or main.css file */
  app.use(express.static('client/build'));

  /* Express will serve up the index.html file
    if it doesn't recognize the route */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);