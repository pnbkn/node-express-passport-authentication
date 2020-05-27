const express = require("express");
const path = require("path");
const app = express();

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
  app.get('/dist/main.js', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/main.js'));
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log('Listening on 3001'));