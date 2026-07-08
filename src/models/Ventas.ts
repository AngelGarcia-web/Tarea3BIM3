export class Venta {

    constructor(
        public id: number,
        public idCliente: number,
        public idProducto: number,
        public cantidad: number,
        public fecha: string
    ) {

        if (id <= 0) {
            throw new Error("El ID debe ser mayor que 0");
        }

        if (idCliente <= 0) {
            throw new Error("Cliente inválido");
        }

        if (idProducto <= 0) {
            throw new Error("Producto inválido");
        }

        if (cantidad <= 0) {
            throw new Error("Cantidad inválida");
        }

        if (fecha.trim() === "") {
            throw new Error("La fecha es obligatoria");
        }

    }

}