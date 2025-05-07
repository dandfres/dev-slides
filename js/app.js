// Función constructora para crear objetos tipo Slide
function Slide(title, description, bullets) {
  this.title = title;
  this.description = description || ""; // Si no hay descripción, se pone texto vacío
  this.bullets = bullets || []; // Si no hay bullets, se pone un array vacío
}

// Array con las diapositivas creadas con la funcion constructora
const slides = [
  new Slide(
    "Sebastian Durand",
    `<p>Empece este camino con ganas de entender cómo funcionan las aplicaciones que usamos a diario. 
    Al principio todo era confuso, pero con práctica, disciplina y curiosidad, fui conectando piezas.</p>
    <ul class="list-disc list-inside mt-4">
      <li>Principales Aprendizajes</li>
      <li>Principales Desafíos</li>
      <li>Mi Compromiso para el Code 301</li>
      <li>Mi Expectativa sobre mi futuro</li>
    </ul>`
  ),
  new Slide("Principales Aprendizajes", "Logros y conceptos clave:", [
    "HTML semántico",
    "Tailwind CSS y Boostrap",
    "Manipular el DOM",
    "Patron Store",
    "Estados y persistencia",
    "Experiencia en proyectos grupales",
  ]),
  new Slide(
    "Principales Desafíos",
    "Momentos difíciles o conceptos retadores:",
    [
      "Entender el flujo del DOM",
      "Organizar el código",
      "persistencia de datos (local storage)",
      "Leer errores en consola",
      "falta de tiempo",
    ]
  ),
  new Slide(
    "Mi Compromiso para el Code 301",
    `<p>Estoy listo para seguir construyendo sobre lo aprendido. Me comprometo a reforzar mis fundamentos, 
    practicar más JavaScript y enfrentar el código con positivismo y menos miedo.</p>
    <p class="mt-2">Quisiera tambien enfocarme en escribir mejor código, trabajar en equipo y participar mas en el proximo modulo.</p>`
  ),
  new Slide(
    "Mi Expectativa sobre mi futuro",
    `<p>Quiero aprender frameworks modernos como React y Angular para fortalecer mis habilidades en frontend, y ademas complementar mi formación con desarrollo móvil utilizando herramientas como Android Studio.</p>
    <br>
    <p>Mi objetivo es ampliar mis conocimientos para poder crear aplicaciones completas, tanto web como moviles, que sean funcionales, atractivas y eficientes. Y tambien sueño con ser un desarrollador Freelance, ser independiente con proyectos temporales y trabajo romoto.</p>`
  ),
];

// Variable que controla la diapositiva actual
let currentSlide = 0;

// Funcion para renderizar una diapositiva
function renderSlide(index) {
  const slide = slides[index]; // Obtiene la diapositiva correspondiente
  const container = document.querySelector('.container'); // Selecciona el contenedor en el HTML

  // Arma el contenido HTML
  let html = `<h2 class="text-2xl font-bold mb-4">${slide.title}</h2>`;
  html += `<div class="text-base">${slide.description}</div>`;

  // Si hay bullets, los agrega a la vista
  if (slide.bullets.length > 0) {
    html += `<ul class="list-disc list-inside mt-4">`;
    slide.bullets.forEach((b) => {
      html += `<li>${b}</li>`;
    });
    html += `</ul>`;
  }

  // Inserta el contenido en el DOM
  container.innerHTML = html;

  // Desactiva el botón "Anterior" si estás en la primera slide
  document.getElementById("prevBtn").disabled = index === 0;

  // Desactiva el botón "Siguiente" si estás en la última slide
  document.getElementById("nextBtn").disabled = index === slides.length - 1;
}

// Eventos para navegar entre las diapositivas
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(currentSlide);
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    renderSlide(currentSlide);
  }
});

// Mostrar la primera diapositiva al cargar
renderSlide(currentSlide);
