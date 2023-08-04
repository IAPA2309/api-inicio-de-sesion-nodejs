const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;
app.use(cors());


const users = [
  { username: 'usuario', password: 'contraseña' }
];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
