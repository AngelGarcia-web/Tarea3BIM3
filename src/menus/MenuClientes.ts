import promptSync from "prompt-sync";
import { ClienteService } from "../service/ServiceClientes.js";
import { Cliente } from "../models/Clientes.js";

const prompt = promptSync();

export async function menuClientes() {

    const clienteService = new ClienteService();

    try {

        await clienteService.cargar();

        let opcion = 0;

        do {

            console.log("\n===== CLIENTES =====");
            console.log("1. Listar");
            console.log("2. Agregar");
            console.log("3. Actualizar");
            console.log("4. Eliminar");
            console.log("5. Volver");

            opcion = Number(prompt("Opcion: "));

            switch(opcion){

                case 1:

                    console.log(clienteService.listar());

                    break;


                case 2:

                    try {

                        const id = Number(prompt("Id: "));
                        const nombre = prompt("Nombre: ");
                        const correo = prompt("Correo: ");
                        const telefono = prompt("Telefono: ");

                        await clienteService.agregar(
                            new Cliente(id,nombre,correo,telefono)
                        );

                        console.log("Cliente agregado");

                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 3:

                    try {

                        const id = Number(prompt("Id del cliente: "));
                        const nombre = prompt("Nombre: ");
                        const correo = prompt("Correo: ");
                        const telefono = prompt("Telefono: ");

                        await clienteService.actualizar(
                            id,
                            new Cliente(id,nombre,correo,telefono)
                        );

                        console.log("Cliente actualizado");


                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 4:

                    try{

                        const id = Number(prompt("Id: "));

                        await clienteService.eliminar(id);

                        console.log("Cliente eliminado");

                    }catch(error:any){

                        console.log(error.message);

                    }

                    break;


                case 5:

                    console.log("Regresando...");

                    break;


                default:

                    console.log("Opcion incorrecta");

            }


        }while(opcion !== 5);


    }catch(error:any){

        console.log("Error al cargar clientes.");
        console.log(error);

    }

}