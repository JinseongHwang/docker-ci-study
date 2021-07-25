const express = require('express');

// constants
const PORT = 8080;

// app
const app = express();
app.get('/', (req, res) => {
  res.send('안녕~ ㅋㅋ~');
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
