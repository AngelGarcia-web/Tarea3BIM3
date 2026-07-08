import { promises as fs } from "fs";
import { Producto } from "../models/Productos.js";

export class ProductoService {

    productos: Producto[] = [];

    cargar() {
        return fs.readFile("./src/data/Productos.json", "utf-8")
            .then((datos) => {
                this.productos = JSON.parse(datos);
            })
            .catch(() => {
                this.productos = [];
            });
    }

    guardar() {
        return fs.writeFile(
            "./src/data/Productos.json",
            JSON.stringify(this.productos, null, 2)
        );
    }

    listar() {
        return this.productos;
    }

    agregar(producto: Producto) {
        this.productos.push(producto);
        return this.guardar();
    }

    actualizar(id: number, producto: Producto) {

        const indice = this.productos.findIndex(p => p.id == id);

        if (indice != -1) {
            this.productos[indice] = producto;
        }

        return this.guardar();
    }

    eliminar(id: number) {

        this.productos = this.productos.filter(p => p.id != id);

        return this.guardar();
    }

}