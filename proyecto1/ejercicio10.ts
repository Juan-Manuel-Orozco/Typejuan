// Importar la biblioteca readline para la entrada de datos del usuario
import * as readline from 'readline';

// Crear una interfaz de readline
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inicializar una variable para el puntaje total con valor cero
let puntajeTotal = 0;

// Las respuestas correctas para las preguntas del examen
let respuestasCorrectas = ['a', 'b', 'c', 'd', 'e'];

// Función para evaluar una respuesta
function evaluarRespuesta(respuesta: string, pregunta: number) {
    // Evaluar si la respuesta es correcta
    if (respuesta === respuestasCorrectas[pregunta]) {
        // Si es correcta, sumar 10 puntos al puntaje total
        puntajeTotal += 10;
    }
}

// Función para hacer una pregunta
function hacerPregunta(pregunta: number) {
    // Presentar la pregunta al usuario
    rl.question('Por favor, responda la pregunta ' + (pregunta + 1) + ': ', (respuesta) => {
        // Evaluar la respuesta proporcionada por el usuario
        evaluarRespuesta(respuesta, pregunta);

        // Si aún quedan preguntas por hacer, hacer la siguiente pregunta
        if (pregunta < respuestasCorrectas.length - 1) {
            hacerPregunta(pregunta + 1);
        } else {
            // Si no quedan más preguntas, mostrar los resultados del examen
            console.log('Cantidad de respuestas correctas: ' + (puntajeTotal / 10));
            console.log('Puntaje total obtenido: ' + puntajeTotal);

            // Cerrar la interfaz de readline
            rl.close();
        }
    });
}

// Empezar el examen haciendo la primera pregunta
hacerPregunta(0);
