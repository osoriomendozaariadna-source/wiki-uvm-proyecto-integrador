<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tips</title>

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
      <p> <h2> TIPS PARA COMENZAR A PROGRAMAR EN WEB </h2>
		1. Empieza por la base: <br>
		Aprende HTML, luego CSS y después JavaScript.<br>
        No intentes aprenderlo todo de golpe; cada lenguaje cumple una función diferente.<br>

2. Practica todos los días: <br>
Aunque sean 15–20 minutos, la constancia importa más que las horas seguidas. <br>
Repite ejercicios simples: encabezados, párrafos, botones, formularios, etc. <br>

3. Usa buenos recursos: <br>
Consulta documentación confiable: MDN Web Docs, W3Schools, FreeCodeCamp. <br>
Mira videos cortos en YouTube o cursos introductorios.<br>

4. No solo mires tutoriales, ¡haz proyectos!: <br>
Crea páginas básicas: <br>
Presentación personal <br>
Galería de fotos<br>
Página de un restaurante <br>
Tarjeta de presentación digital <br>
Aprenderás mucho más haciendo que mirando. <br>
5. Aprende a usar las herramientas del navegador: <br>
Inspecciona elementos, edita estilos en vivo, revisa errores en consola. <br>
Esto acelera tu comprensión de HTML, CSS y JS.</p>
    </div>

    <div class="tarjeta rosa2"> <img src="tips.jpg" width="1280" height="905" alt=""/>
      <p> 6. Evita copiar y pegar sin entender: <br>
Mejor escribe el código tú mismo para desarrollar memoria y lógica. <br>
7. Domina lo esencial de CSS: <br>
Box model (márgenes, bordes, padding). <br>
Flexbox y Grid (para acomodar elementos). <br>
Selectores básicos e intermedios. <br>
8. Aprende diseño responsivo: <br>
Usa media queries para que tu sitio se vea bien en pantalla de celular, tablet y computadora. <br>
9. Mantén tu código ordenado: <br>
Indenta bien tus líneas. <br>
Nombra tus clases de forma clara. <br>
Separa HTML, CSS y JS cuando el proyecto crezca.<br>
10. Usa Git desde temprano: <br>
Aprende lo básico de Git y sube tus proyectos a GitHub.<br>
Te ayudará a guardar versiones y mostrar tu trabajo.<br>
11. No temas a equivocarte:<br>
Los errores son parte del aprendizaje.<br>
Lee los mensajes de error con calma; casi siempre te dicen qué corregir.<br>
12. Analiza el código de otros:<br>
Abre sitios simples y revisa cómo están hechos.<br>
CodePen, GitHub y plantillas gratuitas son buenas referencias.</p>
    </div>

    <div class="tarjeta rosa2"> 
      <p>13. Experimenta: <br>
Cambia colores, tamaños, posiciones, tipografías… <br>
La programación web se domina probando.<br>
14. Aprende lo básico de accesibilidad:<br>
Usa textos alternativos, etiquetas correctas y buen contraste. <br>
Es parte del diseño profesional. <br>
15. Sé paciente:<br>
Dominar HTML y CSS puede ser rápido, pero JavaScript toma tiempo.<br>
Avanza paso a paso sin compararte con nadie.</p>
		<img src="tips_dos.jpg" width="1200" height="630" alt=""/>
		<img src="oip.jpg" width="1200" height="630" alt=""/>
		<img src="OIP_dos.jpg" width="1200" height="630" alt=""/>
    </div>

  </section>

  <footer>
    © 2025 Wiki UVM - Todos los derechos reservados.
  </footer>

</body>
</html>
