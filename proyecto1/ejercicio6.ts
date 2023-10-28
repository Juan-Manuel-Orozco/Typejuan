class Pizzeria {
    private static PRECIO_PIZZA = 7000;
    private static PRECIO_SANDWICH = 5000;
    private static PRECIO_ENSALADA = 15000;
    private static PRECIO_SALSA = 500;

    calcularCosto(opcion: number, cantidad: number, salsaAdicional: boolean): number {
        let costo = 0;

        switch (opcion) {
            case 1:
                costo += Pizzeria.PRECIO_PIZZA * cantidad;
                break;
            case 2:
                costo += Pizzeria.PRECIO_SANDWICH * cantidad;
                break;
            case 3:
                costo += Pizzeria.PRECIO_ENSALADA * cantidad;
                break;
            default:
                console.log("Opción no válida");
                return 0; // Devuelve 0 en caso de opción no válida
        }

        if (salsaAdicional) {
            costo += Pizzeria.PRECIO_SALSA;
        }

        return costo;
    }
}

let pizzeria = new Pizzeria();
console.log(pizzeria.calcularCosto(1, 2, true)); // Ejemplo de uso