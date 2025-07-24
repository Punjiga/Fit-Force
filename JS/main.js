//--------- COSAS A USAR DE LA PÁGINA ----------------
const gimnasioBtn = document.getElementById('gimnasioBtn');
const crossfitBtn = document.getElementById('crossfitBtn');
const todasLasRutinas = document.querySelectorAll('.cardRoutine');

//--------- ACCIONES (FUNCIONES) ----------------

// Esta acción muestra las rutinas de GIMNASIO
function mostrarRutinasGimnasio() {
    // Pone el botón de 'Gimnasio' como activo.
    gimnasioBtn.classList.add("active");
    crossfitBtn.classList.remove("active");

    // Revisa cada tarjeta, una por una.
    todasLasRutinas.forEach(rutina => {
        // Si la tarjeta es de 'gimnasio', se asegura de que se vea.
        if (rutina.classList.contains('gimnasio')) {
            rutina.classList.remove('hideCard');
        } 
        // Si no es de 'gimnasio', se esconde.
        else {
            rutina.classList.add('hideCard');
        }
    });
}

// Esta acción muestra las rutinas de CROSSFIT
function mostrarRutinasCrossfit() {
    // Pone el botón de 'CrossFit' como activo.
    gimnasioBtn.classList.remove("active");
    crossfitBtn.classList.add("active");

    // Revisa cada tarjeta, una por una.
    todasLasRutinas.forEach(rutina => {
        // Si la tarjeta es de 'crossfit', se asegura de que se vea.
        if (rutina.classList.contains('crossfit')) {
            rutina.classList.remove('hideCard');
        } 
        // Si no es de 'crossfit', se esconde.
        else {
            rutina.classList.add('hideCard');
        }
    });
}

//--------- EVENTOS (CUÁNDO HACER LAS ACCIONES) ----------------
// Cuando se hace click en el botón de gimnasio, se ejecuta la acción de mostrar sus rutinas.
gimnasioBtn.addEventListener('click', mostrarRutinasGimnasio);
// Cuando se hace click en el botón de crossfit, se ejecuta la acción de mostrar sus rutinas.
crossfitBtn.addEventListener('click', mostrarRutinasCrossfit);

