const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pdController = require('./controllers/personalDetailsController');
const wdController = require('./controllers/workDetailsController');
const db=require('./db/db')

const PORT = 5002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use('/pd', pdController);
app.use('/wd', wdController);
