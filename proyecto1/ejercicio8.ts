// Importar la biblioteca readline para la entrada de datos del usuario
import * as readline from 'readline';

// Crear una interfaz de readline
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario la longitud del primer lado del triángulo
rl.question('Por favor, ingrese la longitud del primer lado del triángulo: ', (lado1) => {
    // Solicitar al usuario la longitud del segundo lado del triángulo
    rl.question('Por favor, ingrese la longitud del segundo lado del triángulo: ', (lado2) => {
        // Solicitar al usuario la longitud del tercer lado del triángulo
        rl.question('Por favor, ingrese la longitud del tercer lado del triángulo: ', (lado3) => {
            // Verificar si las tres longitudes son iguales
            if (lado1 === lado2 && lado2 === lado3) {
                // Si todas son iguales, mostrar el mensaje "El triángulo es equilátero"
                console.log('El triángulo es equilátero');
            } else {
                // Si al menos un par de lados tiene longitudes diferentes, mostrar el mensaje "El triángulo no es equilátero"
                console.log('El triángulo no es equilátero');
            }
            // Cerrar la interfaz de readline
            rl.close();
        });
    });
});
