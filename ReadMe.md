<!-- Improved compatibility of Volver arriba link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">README</h3>

  <p align="center">
    API para una aplicacion de REACT NATIVE.
    <br />
    <a href="https://github.com/IAPA2309/api-inicio-de-sesion-nodejs.git"><strong>Documentacion »</strong></a>
    <br />
    <br />
    <a href="https://github.com/IAPA2309/practica-rn-creando-un-login.git">Aplicacion</a>
    ·
    <a href="https://github.com/IAPA2309/api-inicio-de-sesion-nodejs/issues">Reportar Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#hecho-con">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <a href="#Empezando">Empezando</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalacion">Instalacion</a></li>
        <li><a href="#iniciar">Iniciar</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

Es una API en NODEJS para una aplicacion en REACT NATIVE que es un login.

[Proyecto de React Native](https://github.com/IAPA2309/practica-rn-creando-un-login.git)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

### Hecho con

* NodeJS

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>


<!-- GETTING STARTED -->
## Empezando

Para poner en funcionamiento una copia local, siga estos sencillos pasos de ejemplo.

### Requisitos

Instalar la ultima version de NPM.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalacion

1. Clonar el repo
   ```sh
   git clone https://github.com/IAPA2309/api-inicio-de-sesion-nodejs.git
   ```
2. Instalar los paquetes NPM 
   ```sh
   npm install
   ```
3. Abrir la base de datos del archivo ```usuarios.slq```
  - Usario y permisos base de datos en caso de que se necesite

    ```
    USE [master]
    GO
    CREATE LOGIN [usuario] WITH PASSWORD=N'usuario', DEFAULT_DATABASE=[usuarios], CHECK_EXPIRATION=OFF,
    CHECK_POLICY=OFF
    GO

    USE [usuarios]
    GO
    CREATE USER [usuario] FOR LOGIN [usuario]
    GO
    USE [usuarios]
    GO
    ALTER ROLE [db_owner] ADD MEMBER [usuarios]
    GO
    ```

### Iniciar

1. Iniciar la API (http://localhost:5000)
   ```sh
   node index.js
   ```

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

```
POST | /login:
- Se utiliza para inciar sesion.
- Recibe un mensaje en caso de que el inicio de sesion sea exitoso.
- En el body se debe mandar {username: "nombreDelUsuario", password: "contraseña"}

POST | /register:
- Se utiliza para registrarse.
- Recibe un mensaje en caso de que el registro sea exitoso.
- En el body se debe mandar {username: "nombreDelUsuario", password: "contraseña"}


POST | /userData:
- Se utiliza para conseguir informacion extra del usuario.
- En caso de que se encuentre el usuario, devolvera un objeto con la informacion.
- En el body se debe mandar {username: "nombreDelUsuario"}


PUT | /updateProfile: 
- Se utiliza para actualizar el perfil
- En caso de que se actualize correctamente, recibira un mensaje.
- En el body se debe mandar {user: "nombreDelUsuario", nombre:"nombreRealDelUsuario" , apellido: "apellidoDelUsuario"}

```

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Iniciar sesion
- [x] Registrarse
- [x] Actualizar el perfil
- [x] Conseguir informacion del perfil

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- CONTACTO -->
## Contacto

- Iñaki Perez - email@gmail.com
- Bautista Sepulveda - email@gmail.com

Link proyecto API: [https://github.com/IAPA2309/api-inicio-de-sesion-nodejs.git](https://github.com/IAPA2309/api-inicio-de-sesion-nodejs.git)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- Agradecimientos -->
## Agradecimientos

* [README TEMPLATE](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors