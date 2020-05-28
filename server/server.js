const express = require("express");
const path = require("path");
const app = express();
const {syncAndSeed} = require('./db');
const PORT = process.env.PORT || 5000
app.use("/api", require("./router"));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
  app.get('/dist/main.js', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/main.js'));
  })
  app.get("/styles.css", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../css/styles.css"));
  });



syncAndSeed()
  .then(() =>
  app.listen(PORT, ()=> console.log('Listening on 5000'))
  )