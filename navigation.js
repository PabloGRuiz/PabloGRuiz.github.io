// Variables
let secAct = 1;

// Obtener los botones:
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

// Agregar event listeners
prevButton.addEventListener("click", navigatePrevious);
nextButton.addEventListener("click", navigateNext);

// Funciones para los botones

if (secAct === 1) {
  prevButton.style.display = "none";
}

function navigatePrevious() {
  secAct--;
  if (secAct < 1) {
    secAct = 1;
  }
  navigateToSection(secAct);
  toggleNavigationButtons();
}

function navigateNext() {
  secAct++;
  if (secAct > 5) {
    secAct = 5;
  }
  navigateToSection(secAct);
  toggleNavigationButtons();
}

function toggleNavigationButtons() {
  if (secAct === 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (secAct === 5) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

function navigateToSection(sectionId) {
  let section = document.getElementById(sectionId.toString());
  section.scrollIntoView({ behavior: "smooth" });
}

// Resetear la pagina

window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
});
