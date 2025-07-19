const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from PM2 on EC2!');
});

app.listen(8080, '0.0.0.0', () => {
    console.log('App running on http://0.0.0.0:8080');
  });
  
