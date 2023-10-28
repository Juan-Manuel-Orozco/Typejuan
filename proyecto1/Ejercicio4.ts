class Lavanderia {
    private static PRECIO_LAVADO_SECO = 4000;
    private static PRECIO_LAVADO_NORMAL = 3000;
    private static PRECIO_PLANCHADO = 2000;
    private static PRECIO_DOMICILIO = 4000;

    calcularCosto(servicio: string, tipoLavado: string, cantidadPrendas: number): number {
        let costo = 0;

        if (servicio === 'lavado') {
            if (tipoLavado === 'seco') {
                costo += Lavanderia.PRECIO_LAVADO_SECO * cantidadPrendas;
            } else if (tipoLavado === 'normal') {
                costo += Lavanderia.PRECIO_LAVADO_NORMAL * cantidadPrendas;
            }
        } else if (servicio === 'planchado') {
            costo += Lavanderia.PRECIO_PLANCHADO * cantidadPrendas;
            costo += Lavanderia.PRECIO_DOMICILIO;
        }

        return costo;
    }
}

let lavanderia = new Lavanderia();
console.log(lavanderia.calcularCosto('lavado', 'seco', 5)); 