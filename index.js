import sql from 'mssql';
import dbConfig from './dbconfig.js';
import express from 'express';
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser'); 
import cors from 'cors';


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


const users = [
  { username: 'usuario', password: 'contraseña' }
];


// let pool = await sql.connect(config);
// let result = await pool.request().query("SELECT top 1 * from Users");
// console.log(result.recordset[0]);

// app.post('/login', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   const { username, password } = req.body;

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     res.json({ message: 'Inicio de sesión exitoso' });
//   } else {
//     res.status(401).json({ message: 'Credenciales inválidas' });
//   }
// });

// app.post('/register', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   const { username, password } = req.body;

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     res.json({ message: 'Inicio de sesión exitoso' });
//   } else {
//     res.status(401).json({ message: 'Credenciales inválidas' });
//   }
// });

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Crear una nueva conexión a la base de datos
    const pool = await sql.connect(dbConfig);

    // Verificar campos vacíos
    if (!username || !password) {
      return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    }
    

    // Realizar una consulta para obtener el usuario por nombre de usuario
    const result = await pool
      .request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM Users WHERE name = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña (esto asume que la contraseña está almacenada de manera segura en la base de datos)
    const storedPassword = result.recordset[0].password; 
    if (storedPassword !== password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Cerrar la conexión a la base de datos
    await pool.close();

    // Enviar respuesta exitosa
    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al acceder a la base de datos' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Crear una nueva conexión a la base de datos
    const pool = await sql.connect(dbConfig);

    // Verificar campos vacíos
    if (!username || !password) {
      return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    }    

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await pool
      .request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM Users WHERE name = @username');

    if (existingUser.recordset.length > 0) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Insertar el nuevo usuario en la base de datos
    await pool
      .request()
      .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, password)
      .query('INSERT INTO Users (name, password) VALUES (@username, @password)');

    // Cerrar la conexión a la base de datos
    await pool.close();

    // Enviar respuesta exitosa
    res.json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al acceder a la base de datos' });
  }
});



app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

