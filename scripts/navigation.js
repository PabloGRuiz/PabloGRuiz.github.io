// Obtenemos los elementos del DOM
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Función para mover a la sección anterior
const goToPreviousSection = () => {
    const currentSection = document.querySelector('section:not([hidden])');
    const previousSection = currentSection.previousElementSibling;
    if (previousSection) {
        currentSection.setAttribute('hidden', true);
        previousSection.removeAttribute('hidden');
        previousSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Función para mover a la siguiente sección
const goToNextSection = () => {
    const currentSection = document.querySelector('section:not([hidden])');
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        currentSection.setAttribute('hidden', true);
        nextSection.removeAttribute('hidden');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Asignamos los listeners a los botones
prevButton.addEventListener('click', goToPreviousSection);
nextButton.addEventListener('click', goToNextSection);

