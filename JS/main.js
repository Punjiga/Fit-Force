

/********** ENVOLTORIO PARA ESPERAR AL DOM Y SOLUCIONAR PROBLEMAS **********/
document.addEventListener('DOMContentLoaded', () => {
    /* ==================== SELECTORES ==================== */
    const gimnasioBtn = document.getElementById('gimnasioBtn');
    const crossfitBtn = document.getElementById('crossfitBtn');
    const todasLasRutinas = document.querySelectorAll('.cardRoutine');
    /* Carrusel header */
    const headerSlides = document.querySelectorAll('.headerSlide');
    let indiceSlide = 0;
    /* Menú hamburguesa */
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const ulHeader = document.getElementById('ulHeader');
    const navLinks = document.querySelectorAll('.navLink');














    /* ==================== FUNCIONES ==================== */
    /* --- Rutinas --- */
    function mostrarRutinasGimnasio() {
        gimnasioBtn.classList.add('active');
        crossfitBtn.classList.remove('active');
        todasLasRutinas.forEach(rutina => {
            if (rutina.classList.contains('gimnasio')) {
                rutina.classList.remove('hideCard');
            } else {
                rutina.classList.add('hideCard');
            }
        });
    }
    function mostrarRutinasCrossfit() {
        gimnasioBtn.classList.remove('active');
        crossfitBtn.classList.add('active');
        todasLasRutinas.forEach(rutina => {
            if (rutina.classList.contains('crossfit')) {
                rutina.classList.remove('hideCard');
            } else {
                rutina.classList.add('hideCard');
            }
        });
    }
    /* --- Carrusel header --- */
    function mostrarSlideActual() {
        headerSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === indiceSlide);
        });
    }
    function pasarAlSiguienteSlide() {
        indiceSlide = (indiceSlide + 1) % headerSlides.length;
        mostrarSlideActual();
    }
    /* --- Menú hamburguesa --- */
    function mostrarHamMenu() {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        ulHeader.style.left = '0%';
    }
    function ocultarHamMenu() {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        ulHeader.style.left = '5000px';
    }
















    /* ==================== EVENTOS ==================== */
    /* Filtros de rutinas */
    gimnasioBtn.addEventListener('click', mostrarRutinasGimnasio);
    crossfitBtn.addEventListener('click', mostrarRutinasCrossfit);
    /* Carrusel header */
    window.addEventListener('load', mostrarSlideActual);
    setInterval(pasarAlSiguienteSlide, 5000);
    /* Calendario (FullCalendar) */
    const calendario = new FullCalendar.Calendar(
        document.getElementById('calendar'),
        {
            locale: 'es',
            initialView: 'dayGridMonth',
            height: 'auto',
            nowIndicator: true,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            events: [
                /* semana 1 */
                { title: 'CrossFit – WOD Infernal', start: '2025-08-05T18:00:00', className: 'fc-event--crossfit' },
                /* semana 2 */
                { title: 'Calistenia – Parque Central', start: '2025-08-13T07:00:00', className: 'fc-event--calistenia' },
                /* semana 3 */
                { title: 'Invitado especial – Profe Leo', start: '2025-08-21', allDay: true, className: 'fc-event--visita' },
                /* semana 4 */
                { title: 'Taller de Nutrición', start: '2025-08-29T10:00:00', className: 'fc-event--visita' }
            ]
        }
    );
    calendario.render();
    /* Menú hamburguesa */
    openMenu.addEventListener('click', mostrarHamMenu);
    closeMenu.addEventListener('click', ocultarHamMenu);
    /********** CERRAR MENÚ SOLO ≤ 768 px **********/
    const mq = window.matchMedia('(max-width: 768px)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mq.matches) ocultarHamMenu();
        });
    });
})
