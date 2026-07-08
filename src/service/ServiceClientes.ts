import { promises as fs } from "fs";
import { Cliente } from "../models/Clientes.js";

export class ClienteService {

    clientes: Cliente[] = [];

    cargar() {
        return fs.readFile("./src/data/Clientes.json", "utf-8")
            .then((datos) => {
                this.clientes = JSON.parse(datos);
            })
            .catch(() => {
                this.clientes = [];
            });
    }

    guardar() {
        return fs.writeFile(
            "./src/data/Clientes.json",
            JSON.stringify(this.clientes, null, 2)
        );
    }

    listar() {
        return this.clientes;
    }

    agregar(cliente: Cliente) {
        this.clientes.push(cliente);
        return this.guardar();
    }

    actualizar(id: number, cliente: Cliente) {

        const indice = this.clientes.findIndex(c => c.id == id);

        if (indice != -1) {
            this.clientes[indice] = cliente;
        }

        return this.guardar();
    }

    eliminar(id: number) {

        this.clientes = this.clientes.filter(c => c.id != id);

        return this.guardar();
    }

}