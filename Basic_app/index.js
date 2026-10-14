console.log("Hello World");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/ananya',(req,res) => {
    res.send('this is ananya')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});