import { promises as fs } from "fs";
import { Venta } from "../models/Ventas.js";

export class VentaService {

    ventas: Venta[] = [];

    cargar() {
        return fs.readFile("./src/data/Ventas.json", "utf-8")
            .then((datos) => {
                this.ventas = JSON.parse(datos);
            })
            .catch(() => {
                this.ventas = [];
            });
    }

    guardar() {
        return fs.writeFile(
            "./src/data/Ventas.json",
            JSON.stringify(this.ventas, null, 2)
        );
    }

    listar() {
        return this.ventas;
    }

    agregar(venta: Venta) {
        this.ventas.push(venta);
        return this.guardar();
    }

    actualizar(id: number, venta: Venta) {

        const indice = this.ventas.findIndex(v => v.id == id);

        if (indice != -1) {
            this.ventas[indice] = venta;
        }

        return this.guardar();
    }

    eliminar(id: number) {

        this.ventas = this.ventas.filter(v => v.id != id);

        return this.guardar();
    }

}