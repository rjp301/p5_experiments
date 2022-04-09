const PORT = 3000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Select a filename');
});

app.get('/:sketch', (req, res) => {
  res.render('index', { path: req.params.sketch });
});

app.listen(PORT, () => {
  console.log(`p5 listening in port ${PORT}`);
});