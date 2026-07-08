export class Cliente {

    constructor(
        public id: number,
        public nombre: string,
        public correo: string,
        public telefono: string
    ) {

        if (id <= 0) {
            throw new Error("El ID debe ser mayor que 0");
        }

        if (nombre.trim() === "") {
            throw new Error("El nombre es obligatorio");
        }

        if (!correo.includes("@")) {
            throw new Error("Correo inválido");
        }

        if (telefono.length < 8) {
            throw new Error("Teléfono inválido");
        }

    }

}