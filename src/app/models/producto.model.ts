export class Producto {
    nombre: string;
    precio: number;
    url: string;

    constructor(pNombre = '', pPrecio = 0, pUrl = ''){
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.url = pUrl;
    }
}