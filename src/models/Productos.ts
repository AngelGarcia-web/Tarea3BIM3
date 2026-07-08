export class Producto {

    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public stock: number
    ) {

        if (id <= 0) {
            throw new Error("El ID debe ser mayor que 0");
        }

        if (nombre.trim() === "") {
            throw new Error("El nombre es obligatorio");
        }

        if (precio <= 0) {
            throw new Error("El precio debe ser mayor que 0");
        }

        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }

    }

}