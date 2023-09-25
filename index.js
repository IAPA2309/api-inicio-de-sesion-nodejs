import sql from 'mssql';
import dbConfig from './dbconfig.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// const bodyParser = require('body-parser'); 

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());


const users = [
  { username: 'usuario', password: 'contraseña' }
];

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const pool = await sql.connect(dbConfig);

    // Verificar campos vacíos
    if (!username || !password) {
      return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    }
    

    const result = await pool
      .request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM Users WHERE name = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const storedPassword = result.recordset[0].password; 
    if (storedPassword !== password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    await pool.close();

    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al acceder a la base de datos' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

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

    await pool
      .request()
      .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, password)
      .query('INSERT INTO Users (name, password) VALUES (@username, @password)');

    await pool.close();

    res.json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al acceder a la base de datos' });
  }
});

app.post('/userData', async (req, res) => {
try {
  const { username } = req.body;

  const pool = await sql.connect(dbConfig);

  // Verificar campos vacíos
  if (!username) {
    return res
      .status(400)
      .json({ error: "No se pudo verificar el username" });
  }

  // Verificar si el usuario ya existe en la base de datos
  const existingUser = await pool
    .request()
    .input("username", sql.NVarChar, username)
    .query("SELECT nombre, apellido FROM Users WHERE name = @username");

  if (existingUser.recordset.length > 0) {
    return res.status(200).json( existingUser.recordset );
  }

  await pool.close();

  res.json({ existingUser });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Error al acceder a la base de datos" });
}
})

app.put('/updateProfile', async (req, res) => {
try {
  const { user, nombre, apellido } = req.body;

  const updateQuery = 'UPDATE users SET nombre = @pNombre, apellido = @pApellido where name = @pName';

  const pool = await sql.connect(dbConfig);

  // Verificar campos vacíos
  if (!user || !nombre || !apellido) {
    return res
      .status(400)
      .json({ error: "Nombre, y el apellido tiene que ser completados" });
  }

  // Actualizar usuario
  const result = await pool
    .request()
    .input("pName", sql.NVarChar, user)
    .input("pNombre", sql.NVarChar, nombre)
    .input("pApellido", sql.NVarChar, apellido)
    .query(updateQuery);

  await pool.close();

  res.status(200).json({ message: "Usuario actualizado" });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Error al acceder a la base de datos" });
}
})

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

