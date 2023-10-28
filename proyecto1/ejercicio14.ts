// Importar la biblioteca readline para la entrada de datos del usuario
import * as readline from 'readline';

// Crear una interfaz de readline
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para generar e imprimir la tabla de multiplicar
function generarTablaDeMultiplicar(numero: number) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Solicitar al usuario ingresar un número entero para la tabla de multiplicar
rl.question('Por favor, ingrese un número entero para la tabla de multiplicar: ', (respuesta) => {
    let numero = parseInt(respuesta);
    if (isNaN(numero)) {
        console.log('Lo siento, eso no parece ser un número válido.');
    } else {
        generarTablaDeMultiplicar(numero);
    }
    rl.close();
});
