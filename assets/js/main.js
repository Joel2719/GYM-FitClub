/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
/*===== SHOW MENU =====*/
/* Validar si existe constante */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validar si existe constante */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    /* Cuando hacemos clic en cada enlace de navegación, eliminamos el menú sho. */
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    /* Cuando el desplazamiento tiene una altura superior a 50 de la ventana gráfica, agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado */
    this.scrollY >= 0 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    /* Cuando el desplazamiento tiene una altura superior a 350 de la ventana gráfica, agregue la clase show-scroll a la etiqueta a con la clase scroll-top */
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'});
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100});
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'});
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'});

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault()
    // Comprobar si los campos tienen un valor
    if (calculateCm.value == 0 || calculateKg.value == 0) {
        // Agregar y quitar color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // Mostrar mensaje
        calculateMessage.textContent = 'Fill in the Height and Weight 🧑‍💻';

        // Eliminar mensaje tres segundos
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    } else {
        // Fórmula de IMC
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm));

        // Muestra tu estado de salud
        if (bmi < 18.5) {
            // Agregar color y mostrar mensaje
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Tu IMC es ${bmi} y eres flac@ 😔`;
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Tu IMC es ${bmi} y tu estas san@ 🥳`;
        } else {
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Tu IMC es ${bmi} y tienes sobrepes@ 😔`
        }

        // Para borrar el campo de entrada
        calculateCm.value = '';
        calculateKg.value = '';

        // Eliminar mensaje cuatro segundos
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000)
    }

}
calculateForm.addEventListener('submit', calculateBmi);