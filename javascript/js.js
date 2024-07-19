const toggleSectionButton1 = document.getElementById('toggleSectionButton1');
const toggleSectionButton2 = document.getElementById('toggleSectionButton2');

const section1 = document.getElementById('seccion1');
const section2 = document.getElementById('seccion2');

toggleSectionButton1.addEventListener('click', function() {
    section1.classList.toggle('hidden');
});

toggleSectionButton2.addEventListener('click', function() {
    section2.classList.toggle('hidden');
});



//Para el carrusel (solo lo aplico para el section 1 con el texto):

    const carouselData = [
        {
            heading: 'Título 1',
            text: 'Texto de ejemplo para la sección 1.',
            image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
        },
        {
            heading: 'Título 2',
            text: 'Otro texto para el carrusel.',
            image: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
        }
    ];

    let currentSlide = 0;
    const carouselHeading = document.getElementById('carouselHeading');
    const carouselText = document.getElementById('carouselText');
    const carouselImage = document.getElementById('carouselImage');

    function showSlide(index) {
        const slide = carouselData[index];
        carouselHeading.textContent = slide.heading;
        carouselText.textContent = slide.text;
        carouselImage.src = slide.image;
    }

    // Mostrar la primera diapositiva al cargar
    showSlide(currentSlide);

    // Cambiar automáticamente cada 5 segundos
    setInterval(function() {
        currentSlide = (currentSlide + 1) % carouselData.length;
        showSlide(currentSlide);
    }, 5000);
