// Importar la biblioteca readline para la entrada de datos del usuario
import * as readline from 'readline';

// Crear una interfaz de readline
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear un objeto para almacenar los equipos y sus puntos
let equipos: {[nombre: string]: number} = {};

// Función para actualizar los puntos de un equipo
function actualizarPuntos(equipo: string, puntos: number) {
    if (equipos[equipo]) {
        equipos[equipo] += puntos;
    } else {
        equipos[equipo] = puntos;
    }
}

// Función para ingresar los resultados de un partido
function ingresarPartido() {
    rl.question('Ingrese el nombre del primer equipo: ', (equipo1) => {
        rl.question('Ingrese el marcador del primer equipo: ', (marcador1) => {
            rl.question('Ingrese el nombre del segundo equipo: ', (equipo2) => {
                rl.question('Ingrese el marcador del segundo equipo: ', (marcador2) => {
                    // Actualizar los puntos de los equipos en base al resultado del partido
                    if (marcador1 > marcador2) {
                        actualizarPuntos(equipo1, 3);
                    } else if (marcador1 < marcador2) {
                        actualizarPuntos(equipo2, 3);
                    } else {
                        actualizarPuntos(equipo1, 1);
                        actualizarPuntos(equipo2, 1);
                    }

                    // Preguntar al usuario si desea ingresar otro partido
                    rl.question('¿Desea ingresar otro partido? (s/n): ', (respuesta) => {
                        if (respuesta.toLowerCase() === 's') {
                            ingresarPartido();
                        } else {
                            // Mostrar el ranking de equipos
                            console.log('Ranking de equipos:');
                            for (let equipo in equipos) {
                                console.log(equipo + ': ' + equipos[equipo] + ' puntos');
                            }

                            // Cerrar la interfaz de readline
                            rl.close();
                        }
                    });
                });
            });
        });
    });
}

// Empezar el programa pidiendo al usuario que ingrese los resultados de los partidos
ingresarPartido();
