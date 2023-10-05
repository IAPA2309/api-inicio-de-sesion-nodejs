# usario y permisos bd

En caso de que se necesite 

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

[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
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
      <a href="#Empezando">Getting Started</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalacion">Instalacion</a></li>
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

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Es una API en NODEJS para una aplicacion en REACT NATIVE que es un login.

[Proyecto de React Native](https://github.com/IAPA2309/practica-rn-creando-un-login.git)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

### Hecho con

* [![React][React.js]][React-url]

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

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

```/login```:

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add Volver arriba links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- CONTACTO -->
## Contacto

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

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
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 