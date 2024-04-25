const express = require('express');
const app = express();
const port = 4242;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
