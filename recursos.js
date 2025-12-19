<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recursos</title>

  <style>

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      color: #222;
      background-color: #f3f0e9;
      line-height: 1.6;
      padding-top: 160px; 
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

  
    header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }

   
    .top-bar {
      background-color: #A00003;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 60px;
    }

    .logo {
      font-family: Montserrat;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 1px;
    }


    .menu-bar {
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 60px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 30px;
    }

    nav ul li a {
      color: #680001;
      font-size: 15px;
      font-weight: 500;
      transition: 0.3s;
    }

    nav ul li a:hover {
      color: #0f613f;
    }

    .menu-icon {
      width: 40px;
      height: 40px;
      background-color: #2b1c14;
      border-radius: 50%;
    }

    .galeria {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1100px;
      padding: 40px 20px;
      background-color: #8D0406;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .tarjeta {
      width: 300px;
      text-align: center;
      padding: 15px;
      border-radius: 12px;
      height: auto;
      color: white;
    }

    .tarjeta.rosa {
      background-color: #F68D8B;
    }

    .tarjeta.rosa2 {
      background-color: #F68D8B;
    }

    .tarjeta img {
      width: 200px;
      height: auto;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    .tarjeta h2 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    .tarjeta p {
      font-size: 14px;
    }

    /* ====== FOOTER ====== */
    footer {
      background-color: #A00003;
      color: #fff;
      text-align: center;
      padding: 30px 10px;
      font-size: 14px;
      margin-top: 50px;
      width: 100%;
    }

  
    @media(max-width: 900px) {
      .menu-bar {
        flex-direction: column;
        gap: 10px;
      }
    }

    @media(max-width: 600px) {
      .tarjeta {
        width: 90%;
      }
    }
  </style>
</head>

<body>

  <!-- ====== HEADER ====== -->
  <header>
    <div class="top-bar">
      <div class="logo">WIKI UVM</div>
      <div></div>
    </div>  

    <div class="menu-bar">
      <nav>
        <ul>
          <li><a href="#"><a href="wiki_uvm_html.html" target="new">INICIO</a></a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">EJEMPLOS DE CÓDIGOS</a></li>
          <li><a href="#">RECURSOS</a></li>
		  <li><a href="#">TIPS</a></li>
        </ul>
      </nav>
      <div class="menu-icon"><img src="lupa.png" width="40" height="40" alt=""/></div>
    </div>
  </header>

  <section class="galeria">

    <div class="tarjeta rosa">
      <p>Para desarrollar una página web en HTML, existen diversos recursos y herramientas que facilitan tanto la escritura del código como el diseño y la organización del proyecto. Los editores de código como Visual Studio Code, Sublime Text o Atom son ideales porque ofrecen autocompletado, resaltado de sintaxis y extensiones que agilizan el trabajo. También puedes apoyarte en frameworks y librerías como Bootstrap o Tailwind CSS, que permiten crear diseños responsivos de manera rápida sin empezar desde cero. Para comprobar que tu sitio funciona correctamente, los navegadores modernos cuentan con herramientas de desarrollador que te permiten inspeccionar elementos, revisar estilos y detectar errores. Además, plataformas como W3Schools, MDN Web Docs y FreeCodeCamp ofrecen tutoriales, ejemplos y documentación esencial para aprender o consultar dudas. Finalmente, usar sistemas de control de versiones como Git y plataformas como GitHub te ayuda a organizar tu progreso, colaborar y respaldar tu proyecto de manera profesional.</p>
    </div>

    <div class="tarjeta rosa2"> <img src="visual.jpg" width="1280" height="905" alt=""/>
      <h2>Editores de códigos (instalables)</h2>
      <p>Visual Studio Code <br>
		  Sublime Text <br>
		  Atom<br>
          Notepad++<br>
Brackets</p>
		<h2>Editores y entornos online</h2>
		W3Schools TryIt Editor <br>
Codecademy (modo práctica)<br>
FreeCodeCamp (editor integrado)<br>
    </div>

    <div class="tarjeta rosa2"> <img src="codespaces.jpg" width="1200" height="630" alt=""/>
		<img src="og.jpg" width="1200" height="630" alt=""/>
      <h2>Otras herramientas</h2>
      <p>GitHub Codespaces (entorno de desarrollo en la nube) <br>
CodeSandbox (ideal para proyectos web completos)</p>
    </div>

  </section>

  <footer>
    © 2025 Wiki UVM - Todos los derechos reservados.
  </footer>

</body>
</html>
