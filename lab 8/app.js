var express = require('express');
var app = express();
app.use(express.json());

var postRouter = require('./routes/posts');

app.use('/posts', postRouter);

app.get('/health', (req, res) => {
  res.status(200).send('healthy');
});

module.exports = app;
