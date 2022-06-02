export class Cuenta {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(pNombre = '', pPrecio = 0, pCantidad = 0){
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }
}